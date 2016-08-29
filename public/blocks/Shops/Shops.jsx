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
            change_group: false
        }
    },
    itemShop: function (shopId) {
        let item = this.props.shops.list[shopId];

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
        if (cityId === 0) return buf;

        this.props.shops.sort.map((key) => {
            buf.push(<div className="swiper-slide">{this.itemShop(key)}</div>)
        })
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
        return (this.props.iam.cityId === 0) ? '': this.props.city.list[this.props.iam.cityId].name;
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
    change_group: function (e) {
        let el = e.currentTarget,
            id = el.dataset.id

        this.setState({
            change_group: id
        })

        e.preventDefault()
    },
    listCity: function () {
        var list = []
        this.props.city.sort.map((item) => {
            if (item.type === "city") {
                let data = this.props.city.list[item.id]
                if (data.group_id === 0) {
                    list.push(<div className="shops-city-item" key={data.id}>
                        <span data-id={data.id} onClick={this.changeCity}>{data.name}</span>
                    </div>)
                }
            } else {
                let data = this.props.city.groups[item.id]

                list.push(<div className="shops-city-item shops-city-item_group" key={'group-'+data.id} data-id={data.id} onClick={this.change_group}>
                    <span>{data.name}</span>
                </div>)
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
        id = parseInt(id)

        let group = this.props.group[id].city;

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
            || this.state.near  != nextState.near
        )
    },
    render: function() {
        return (
            <div className="shops">
                <div className="shops__header">
                    <div className={"shops__city"+((this.state.changeCity) ? ' shops__city_open' : '')}>
                        Выберите удобный СушиШоп<br />
                        в <a href="#" onClick={this.cityChoose}>{this.city()}{Icon.arrow_down}</a>
                    </div>
                    <a href="#" className="shops__near button button_border button_medium" onClick={this.near}>
                        <span>{Icon.geo}</span>
                        Магазины возле меня
                    </a>
                </div>
                <Swiper
                    className="shops__list shops__list_begin"
                    options={{
                        slidesPerView: 'auto',
                        freeMode: true,
                        scrollbar: ".swiper-scrollbar",
                        scrollbarHide: true,
                        direction: "vertical",
                        mousewheelControl: true,
                        grabCursor: false,
                        simulateTouch: false,
                        scrollbarDraggable: true,
                        onWheel: ShopsListShadow,
                        onTransitionEnd: ShopsListShadow
                    }}
                >
                    {this.listShops()}
                </Swiper>

                <MapShops near={this.state.near} />

                <div className={"shops__city-popup "+((this.state.changeCity) ? "shops__city-popup_showed" : "shops__city-popup_hided" )+((this.state.change_group) ? " shops__city-popup_group" : '')} ref="cityPopup">
                    <div className="shops__city-popup-wrapper">
                        <div className="shops-sity shops-city_city">
                            <div className="shops-city__title">Выберите город</div>
                            {this.listCity()}
                        </div>
                        {(this.state.change_group) ? this.groupPopup(this.state.change_group) : ''}
                    </div>
                </div>
            </div>
        );
    }

});

const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        city: store.city,
        shops: store.shops,
        shadow: store.shadow
    }
};


module.exports = connect(mapStateToProps)(ShopsContainer);