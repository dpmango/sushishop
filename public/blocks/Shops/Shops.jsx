function ShopsListShadow() {
    let blockList = document.querySelector('.shops__list'),
        beginClass = 'shops__list_begin',
        endClass = 'shops__list_end',
        swiper = blockList.swiper;
    if (swiper.isBeginning && !blockList.classList.contains(beginClass)) {
        blockList.classList.add(beginClass);
    }
    if (!swiper.isBeginning && blockList.classList.contains(beginClass)) {
        blockList.classList.remove(beginClass);
    }
}

const ShopsContainer = React.createClass({
    getInitialState: function () {
        return {
            near: 0,
            changeCity: false,
            changeCityGroup: false
        }
    },
    itemShop: function (shopId) {
        let item = this.props.shops.get(shopId);

        return <div className="shops-item" key={shopId}>
            <div>
                <div className="shops-item__adres">{item.adres}</div>
                {(item.is_new) ? <div className="shops-item__new">new</div> : '' }
            </div>
            <div>
                {(item.phone) ? <a href={'tel:'+item.phone} className="shops-item__phone">{item.phone}</a> : '' }
            </div>
        </div>
    },
    listShops: function () {
        let buf = [],
            cityId = this.props.iam.cityId;
        if (cityId == 0) return buf;

        for (let key in this.props.shopsCity) {
            let list = this.props.shopsCity[key];
            if (key == cityId) {
                list.map((item) => {
                    buf.push(this.itemShop(item));
                });
            }
        }
        return buf;
    },
    near: function (e) {
        this.setState({ near: this.state.near + 1 });
        e.preventDefault();
    },
    transition: function () {
        this.transitionCityPopup = new Transition({
            el: this.refs.cityPopup,
            className: 'shops__city-popup',
            speedShow: 200,
            speedHide: 400
        })
    },
    city: function () {
        let cityId = this.props.iam.cityId;
        return (cityId == 0) ? '': this.props.city.get(cityId).name;
    },
    cityChoose: function (e) {
        this.transition()

        if (this.state.changeCity) {
            store.dispatch({
                type: 'SHADOW_HIDE'
            })
            this.transitionCityPopup.hide(() => {
                this.setState({
                    changeCity: !this.state.changeCity
                })
            })
        } else {
            store.dispatch({
                type: 'SHADOW_SHOW',
                name: 'city-choose'
            })
            this.transitionCityPopup.show(() => {
                this.setState({
                    changeCity: !this.state.changeCity
                })
            })
        }
        if (e) {
            e.preventDefault();
        }
    },
    changeCity: function (e) {
        let el = e.currentTarget,
            id = el.dataset.id

        this.transitionCityPopup.hide()
        store.dispatch({
            type: 'SHADOW_HIDE'
        })
        this.setState({
            changeCity: false
        })
        store.dispatch({
            type: 'SET_IAM_CITY',
            cityId: parseInt(id)
        })
        e.preventDefault()
    },
    changeCityGroup: function (e) {
        let el = e.currentTarget,
            id = el.dataset.id

        this.setState({
            changeCityGroup: id
        })

        e.preventDefault()
    },
    listCity: function () {
        let list = []
        if (this.props.city.length == 0) return buf;
        let groups = new Set()
        this.props.city.forEach((data) => {
            if (data.group_id == 0) {
                list.push(<div className="shops-city-item" key={data.id}>
                    <span data-id={data.id} onClick={this.changeCity}>{data.name}</span>
                </div>)
            } else {
                if (!groups.has(data.group_id)) {
                    groups.add(data.group_id)
                    let group = this.props.city.get(data.group_id)
                    list.push(<div className="shops-city-item shops-city-item_group" key={'group-'+group.id} data-id={data.group_id} onClick={this.changeCityGroup}>
                        <span>{group.name}</span>
                    </div>)
                }
            }
        })
        let buf = [[], []];
        for (let i = 0;i < Math.ceil(list.length / 2);i++) {
            buf[0].push(list[i]);
        }
        for (let i = Math.ceil(list.length / 2);i < list.length;i++) {
            buf[1].push(list[i]);
        }
        buf = <div className="shops-city__list">
            <div className="shops-city__column">{buf[0]}</div><div className="shops-city__column">{buf[1]}</div>
        </div>;
        return buf;
    },
    componentWillUpdate: function(nextProps) {
        this.transition()
        if (this.props.shadow.name == 'city-choose' && nextProps.shadow.name == '') {
            this.setState({
                changeCity: false
            })
        }
    },
    groupPopup: function (id) {
        if (!id) return ''
        id = parseInt(id)

        let group = this.props.cityGroup.get(id);

        return (
            <div className="shops-sity shops-city_group">
                <div className="shops-city__title">{group.name}</div>
                {this.listCity()}
            </div>
        )
    },
    shouldComponentUpdate: function(nextProps, nextState, nextContext) {
        return (
            this.props.iam.cityId != nextProps.iam.cityId
            || this.props.iam.shopId != nextProps.iam.shopId
            || this.props.shadow.name == "city-choose"
            || this.state.changeCity  != nextState.changeCity
        )
    },
    render: function() {
        return (
            <div className="shops">
                <div className="shops__header">
                    <div className={"shops__city"+((this.state.changeCity) ? ' shops__city_open' : '')+((typeof this.props.iam.shopId != 'number' || this.props.iam.shopId == 0) ? ' shops__city_loading': '')}>
                        Выберите удобный СушиШоп<br />
                        в <a href="#" onClick={this.cityChoose}>{this.city()}{Icon.arrow_down}</a>
                    </div>
                    <a href="#" className="shops__near button button_border button_medium" onClick={this.near}>
                        <span>{Icon.geo}</span>
                        Магазины возле меня
                    </a>
                </div>
                <Swiper
                    slidesPerView='auto'
                    freeMode={true}
                    scrollbar=".swiper-scrollbar"
                    scrollbarHide={true}
                    className="shops__list shops__list_begin"
                    direction="vertical"
                    mousewheelControl={true}
                    grabCursor={false}
                    simulateTouch={false}
                    scrollbarDraggable={true}
                    onWheel={ShopsListShadow}
                    onTransitionEnd={ShopsListShadow}
                >
                    <div className="swiper-slide">
                        {this.listShops()}
                    </div>
                </Swiper>

                {(isNode) ? '' : <MapShops near={this.state.near} />}

                <div className={"shops__city-popup "+((this.state.changeCity) ? "shops__city-popup_showed" : "shops__city-popup_hided" )+((this.state.changeCityGroup) ? " shops__city-popup_group" : '')} ref="cityPopup">
                    <div className="shops__city-popup-wrapper">
                        <div className="shops-sity shops-city_city">
                            <div className="shops-city__title">Выберите город</div>
                            {this.listCity()}
                        </div>
                        {this.groupPopup(this.state.changeCityGroup)}
                    </div>
                </div>
            </div>
        );
    }

});

const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        city: store.city.list,
        cityGroup: store.city.groups,
        cityStatus: store.city.status,
        shops: store.shops.shops,
        shopsCity: store.shops.city,
        shadow: store.shadow
    }
};


module.exports = connect(mapStateToProps)(ShopsContainer);