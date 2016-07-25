const MapShopsContainer = React.createClass({
    markerImage: {
        i: '/f/images/map/marker-round-blue.png',
        iBig: '/f/images/map/marker-blue.png',
        activeShop: '/f/images/map/marker-orange.png',
        activeShopBig: '/f/images/map/marker-orange-big.png',
        shop: '/f/images/map/marker-round-orange.png',
        shopBig: '/f/images/map/marker-sushishop.png'
    },
    getInitialState: function() {
        return {
            isBuild: false,
            actionBuild: false
        };
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
        if (isMove) {
            this.map.fitBounds(this.mapBounds);
        }
    },
    infobox: function (data) {
        let infobox = document.createElement('div');
        infobox.classList.add('shop-infobox')
        if (data.id == this.props.iam.shopId) {
            infobox.classList.add('shop-infobox_active')
        }

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
            this.mapWindows[data.id].close();
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
                map: this.map
            });
            this.markerUpdate()
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

        if (this.props.near == 0) {
            this.mapMarkers['i'] = new google.maps.Marker({
                position: myPosition,
                map: this.map
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
    changeCity: function (from, to) {
        // this.mapMarkers[from].setIcon('/f/images/map/marker.png')
        // this.mapMarkers[to].setIcon('/f/images/map/marker-orange.png')
        this.mapWindows[from].content_.classList.remove('shop-infobox_active')
        this.mapWindows[to].content_.classList.add('shop-infobox_active')
        this.markerUpdate()
    },
    markerUpdate: function () {
        let zoom = this.map.getZoom(),
            isBig = zoom > 11;
        for(let i in this.mapMarkers) {
            if (this.mapMarkers.hasOwnProperty(i)) {
                let item = this.mapMarkers[i];
                if (i == this.props.iam.shopId) {
                    item.setIcon((isBig) ? this.markerImage.activeShopBig : this.markerImage.activeShop)
                } else if (i == 'i') {
                    item.setIcon((isBig) ? this.markerImage.iBig : this.markerImage.i)
                } else {
                    item.setIcon((isBig) ? this.markerImage.shopBig : this.markerImage.shop)
                }
            }
        }
    },
    componentWillReceiveProps: function(nextProps) {
        if (this.state.isBuild) {
            // изменение города
            if ((this.props.iam.cityId != nextProps.iam.cityId)
                && nextProps.iam.shopId != 0 && nextProps.iam.cityId != 0 && this.props.iam.shopId != 0 && this.props.iam.cityId != 0) {
                this.buildMarker(false);
            }
            // изменение магазина
            if (this.props.iam.shopId != nextProps.iam.shopId) {
                this.changeCity(this.props.iam.shopId, nextProps.iam.shopId);
            }
        } else {
            // инициализация
            if ((this.props.iam.cityId == 0 || this.props.iam.shopId == 0 || this.props.shopsStatus != 'load' || this.props.cityStatus != 'load')
                && (nextProps.iam.cityId != 0 && nextProps.iam.shopId != 0 && nextProps.shopsStatus == 'load' && nextProps.cityStatus == 'load')) {
                this.setState({
                    isBuild: true,
                    actionBuild: true
                });
            }
        }
        return false;
    },
    componentWillUpdate: function(nextProps) {
        if (this.props.near != nextProps.near) {
            this.near();
        }
    },
    render: function () {
        return (
            <div className="shops__map" ref="map"></div>
        )
    },
    componentDidMount: function() {
        this.map = new google.maps.Map(this.refs.map, {
            scrollwheel: false
        });
        this.map.addListener('zoom_changed', () => {
            this.markerUpdate()
        })
        if (this.props.iam.shopId != 0 && this.props.shopsStatus == 'load' && this.props.cityStatus == 'load') {
            this.buildMarker();
        }
    },
    componentDidUpdate: function() {
        if (this.state.actionBuild == true) {
            this.buildMarker();
            this.setState({
                actionBuild: false
            })
        }
    }

});



const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        city: store.city.list,
        cityStatus: store.city.status,
        shops: store.shops.shops,
        shopsCity: store.shops.city,
        shopsStatus: store.shops.status
    }
};


module.exports = connect(mapStateToProps)(MapShopsContainer);