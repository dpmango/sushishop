const ShopsContainer = React.createClass({
    getInitialState: function () {
        return {
            near: 0
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
    city: function () {
        let cityId = this.props.iam.cityId;
        return (cityId == 0) ? '': this.props.city.get(cityId).name;
    },
    render: function() {
        return (
            <div className="shops">
                <Swiper
                    slidesPerView='auto'
                    freeMode={true}
                    scrollbar=".swiper-scrollbar"
                    scrollbarHide={false}
                    className="shops__list"
                    direction="vertical"
                    mousewheelControl={true}
                    grabCursor={false}
                    simulateTouch={false}
                >
                    <div className="swiper-slide">
                        <div className="shops__city">
                            Выберите удобный СушиШоп<br />
                            в <a href="#">{this.city()}</a>
                        </div>
                        <a href="#" className="shops__near button button_border button_medium" onClick={this.near}>
                            <span>{Icon.geo}</span>
                            Магазины возле меня
                        </a>
                        {this.listShops()}
                    </div>
                </Swiper>
                <MapShops near={this.state.near} />
            </div>
        );
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


module.exports = connect(mapStateToProps)(ShopsContainer);