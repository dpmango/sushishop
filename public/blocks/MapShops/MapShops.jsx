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
        // if (typeof this.mapMarkers == 'object') {
        //     Object.keys(this.mapMarkers).map((key) => {
        //         this.mapMarkers[key].setMap(null);
        //     })
        // }

        this.mapMarkers = {}
        this.mapWindows = {}

        this.mapBounds = new google.maps.LatLngBounds()

        Object.keys(this.props.shops.list).map((key) => {
            let item = this.props.shops.list[key]
            this.itemShopItem(item.id)
        })

        if (isMove) {
            this.map.fitBounds(this.mapBounds)
            this.boundsListener = google.maps.event.addListener(this.map, 'bounds_changed', () => {
                this.bounds(this.mapBounds)
                google.maps.event.removeListener(this.boundsListener)
            })
        }
    },
    bounds: function (bounds) {
        this.map.fitBounds(bounds)
        this.map.setZoom(this.map.getZoom() - 1)
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
        let item = this.props.shops.list[shopId];
        if (item.geo_lat && item.geo_lng) {
            let latlng = new google.maps.LatLng(item.geo_lat, item.geo_lng);

            if (item.city_id === this.props.iam.cityId) {
                this.mapBounds.extend(latlng)
            }
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
        if (IS_NODE) return

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

        myPosition = new google.maps.LatLng(myPosition.lat, myPosition.lng)

        if (this.props.near == 0) {
            this.mapMarkers['i'] = new google.maps.Marker({
                position: myPosition,
                map: this.map
            })
        }

        var longitude;

        Object.keys(this.props.shops.list).map((key) => {
            let item = this.props.shops.list[key]

            let longitudeItem = google.maps.geometry.spherical.computeDistanceBetween(
                myPosition,
                new google.maps.LatLng(item.geo_lat, item.geo_lng)
            )
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
        })


        this.mapMarkers[longitude.id].setVisible(false)
        this.mapWindows[longitude.id].open(this.map, this.mapMarkers[longitude.id])

        this.mapBounds = new google.maps.LatLngBounds()
        this.mapBounds.extend(myPosition)
        let longitudeShop = this.props.shops.list[longitude.id]
        this.mapBounds.extend(new google.maps.LatLng(longitudeShop.geo_lat, longitudeShop.geo_lng))
        this.map.fitBounds(this.mapBounds)
    },
    changeCity: function (from, to) {
        if (IS_NODE) return

        this.mapWindows[from].content_.classList.remove('shop-infobox_active')
        this.mapWindows[to].content_.classList.add('shop-infobox_active')
        this.markerUpdate()
    },
    markerUpdate: function () {
        if (IS_NODE) return

        let zoom = this.map.getZoom()
        let isBig = zoom > 11

        Object.keys(this.mapMarkers).map((key) => {
            let item = this.mapMarkers[key]
            if (key == this.props.iam.shopId) {
                item.setIcon((isBig) ? this.markerImage.activeShopBig : this.markerImage.activeShop)
            } else if (key == 'i') {
                item.setIcon((isBig) ? this.markerImage.iBig : this.markerImage.i)
            } else {
                item.setIcon((isBig) ? this.markerImage.shopBig : this.markerImage.shop)
            }
        })
    },
    componentWillReceiveProps: function(nextProps) {
        if (IS_NODE) return

        if (this.state.isBuild) {
            // изменение города
            if ((this.props.iam.cityId != nextProps.iam.cityId)
                && nextProps.iam.shopId != 0 && nextProps.iam.cityId != 0 && this.props.iam.shopId != 0 && this.props.iam.cityId != 0) {
                this.buildMarker(false);
            }
            // изменение магазина
            if (this.props.iam.shopId != nextProps.iam.shopId) {
                this.setState({
                    changeCity: [ this.props.iam.shopId, nextProps.iam.shopId ]
                })
            }
        } else {
            // инициализация
            this.setState({
                isBuild: true,
                actionBuild: true
            })
        }
        return false;
    },
    componentDidMount: function() {
        if (IS_NODE) return

        this.map = new google.maps.Map(this.refs.map, {
            scrollwheel: false,
            zoom: 7
        });

        this.map.addListener('zoom_changed', () => {
            this.markerUpdate()
        })
        this.buildMarker(false);
    },
    componentDidUpdate: function() {
        if (IS_NODE) return

        if (this.state.actionBuild == true) {
            this.buildMarker();
            this.setState({
                actionBuild: false
            })
        }
        if (this.state.changeCity) {
            this.changeCity(this.state.changeCity[0], this.state.changeCity[1]);
            this.setState({
                changeCity: null
            })
        }
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
    }

});



const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        city: store.city,
        shops: store.shops,
    }
};


module.exports = connect(mapStateToProps)(MapShopsContainer);