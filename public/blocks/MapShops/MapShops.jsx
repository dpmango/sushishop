const MapShopsContainer = React.createClass({
    componentDidMount: function() {
        this.map = new google.maps.Map(this.refs.map, {
            scrollwheel: false
        });
        this.buildMarker();
    },
    buildMarker: function (isMove = true) {
        if (typeof this.mapMarkers == 'object') {
            for (let key in this.mapMarkers) {
                this.mapMarkers[key].setMap(null);
            }
        }

        this.mapMarkers = {}
        this.mapWindows = {}

        var buf = [];

        this.mapBounds = new google.maps.LatLngBounds();

        for (let key in this.props.shopsCity) {
            if (key == this.props.iam.cityId) {
                this.props.shopsCity[key].map((item) => {
                    this.itemShopItem(item);
                });
            }
        }
        console.log(isMove);
        if (isMove) {
            this.map.fitBounds(this.mapBounds);
        }
    },
    infobox: function (data) {
        let infobox = document.createElement('div');
        infobox.classList.add('shop-infobox');

        let adres = document.createElement('div');
        adres.classList.add('shop-infobox__adres');
        adres.innerText = data.adres;
        infobox.appendChild(adres);

        if (data.mode_from && data.mode_to) {
            let time = document.createElement('div');
            time.classList.add('shop-infobox__time');
            time.innerHTML = `${data.mode_from} &mdash; ${data.mode_to}`;
            infobox.appendChild(time);
        }

        if (data.phone) {
            let phone = document.createElement('div');
            phone.classList.add('shop-infobox__phone');

            let phoneLink = document.createElement('a');
            phoneLink.setAttribute('href', `tel:${data.phone}`);
            phoneLink.innerText = data.phone;
            phone.appendChild(phoneLink);

            infobox.appendChild(phone);
        }

        let action = document.createElement('div');
        action.classList.add('shop-infobox__action');
        
        let reviews = document.createElement('a');
        reviews.setAttribute('href', '#')
        reviews.classList.add('shop-infobox__reviews');
        reviews.classList.add('button');
        reviews.classList.add('button_border');
        reviews.classList.add('button_small');
        reviews.innerText = 'Оставить отзыв';
        action.appendChild(reviews);
        
        let change = document.createElement('a');
        change.setAttribute('href', '#')
        change.classList.add('shop-infobox__change');
        change.innerText = 'Выбрать магазин';
        change.addEventListener('click', (e) => {
            store.dispatch({
                type: 'SET_IAM_SHOP',
                shopId: data.id
            })
            for (let key in this.mapWindows) {
                let item = this.mapWindows[key];
                console.log(key, item);
                item.close()
            }
            this.mapMarkers[data.id].setVisible(true)
            e.preventDefault();
        });
        action.appendChild(change);

        infobox.appendChild(action);

        return infobox;

    },
    itemShopItem: function (shopId) {
        let item = this.props.shops.get(shopId);
        if (item.geo_lat && item.geo_lng) {
            let latlng = new google.maps.LatLng(item.geo_lat, item.geo_lng);

            this.mapBounds.extend(latlng);
            this.mapMarkers[shopId] = new google.maps.Marker({
                position: latlng,
                map: this.map,
                icon: '/f/images/map/marker.png'
            });
            this.mapWindows[shopId] = new InfoBox({
                pixelOffset: new google.maps.Size(-270, 0),
                boxStyle: {
                    width: '540px'
                },
                closeBoxURL: '/f/images/map/close.png',
                closeBoxMargin: "20px 80px 0 0",
                content: this.infobox(item)
            });
            this.mapWindows[shopId].addListener('closeclick', () => {
                this.mapMarkers[shopId].setVisible(true);
            });
            this.mapWindows[shopId].addListener('click', () => {
                this.mapMarkers[shopId].setVisible(true);
            });
            this.mapMarkers[shopId].addListener('click', () => {
                this.mapMarkers[shopId].setVisible(false);
                this.mapWindows[shopId].open(this.map, this.mapMarkers[shopId]);
            });
        }
    },
    near: function () {
        let myPosition = {
            lat: 59.9017779,
            lng: 30.282486600000002
        };
        if (navigator.geolocation && location.protocol == "https:") {
            navigator.geolocation.getCurrentPosition(function(position) {
                myPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        }

        myPosition = new google.maps.LatLng(myPosition.lat, myPosition.lng);

        if (this.props.near == 1) {
            this.mapMarkers['i'] = new google.maps.Marker({
                position: myPosition,
                map: this.map,
                icon: '/f/images/map/marker-blue.png'
            });
        }

        var longitude;

        for(var item of this.props.shops.values()) {
            let longitudeItem = google.maps.geometry.spherical.computeDistanceBetween(
                myPosition,
                new google.maps.LatLng(item.geo_lat, item.geo_lng)
            );
            if (item.geo_lat && item.geo_lng) {
                if (typeof longitude == "undefined") {
                    longitude = {
                        id: item.id,
                        longitude: longitudeItem
                    }
                } else {
                    if (longitude.longitude > longitudeItem) {
                        longitude = {
                            id: item.id,
                            longitude: longitudeItem
                        }
                    }
                }
            }
        }

        this.mapMarkers[longitude.id].setVisible(false);
        this.mapWindows[longitude.id].open(this.map, this.mapMarkers[longitude.id]);

        this.mapBounds = new google.maps.LatLngBounds();
        this.mapBounds.extend(myPosition);
        let longitudeShop = this.props.shops.get(longitude.id);
        this.mapBounds.extend(new google.maps.LatLng(longitudeShop.geo_lat, longitudeShop.geo_lng));
        this.map.fitBounds(this.mapBounds);
    },
    componentDidUpdate: function(nextProps, nextState, nextContext) {
        if (this.props != nextProps && this.props.near == nextProps.near) {
            if (this.props.iam.cityId != nextProps.iam.cityId) {
                this.buildMarker();
            }
        }
        if (this.props.near != nextProps.near) {
            this.near();
        }
    },
    render: function () {
        return (
            <div className="shops__map" ref="map"></div>
        )
    }
});



const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        city: store.city.list,
        shops: store.shops.shops,
        shopsCity: store.shops.city
    }
};


module.exports = connect(mapStateToProps)(MapShopsContainer);