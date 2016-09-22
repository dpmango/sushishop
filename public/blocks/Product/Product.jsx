var ProductContainer = React.createClass({
    getInitialState: function() {
        return {
            sause: 0,
            bake: false,
            toppings: {},
            count: 1
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        // console.log(Object.keys(nextProps.toppings).length, Object.keys(this.props.toppings).length)
        return true
    },
    close: function () {
        store.dispatch({
            type: 'PRODUCT_HIDE'
        })
    },
    changeSause: function () {
        this.setState({
            sause: this.refs.sause.value
        })
    },
    changeBake: function () {
        this.setState({
            bake: !this.state.bake
        })
    },
    changeTopping: function (id) {
        if (id in this.state.toppings || Object.keys(this.state.toppings).length < 3) {
            let obj = this.state.toppings
            if (this.state.toppings[id]) {
                delete this.state.toppings[id]
            } else {
                this.state.toppings[id] = true
            }
            this.setState({
                toppings: obj
            })
        }
    },
    count: function (action) {
        this.setState({
            count: this.state.count + ((action == 'plus') ? 1 : -1)
        })
    },
    render: function () {
        if (this.props.product.active === 0) return <div></div>

        let id = this.props.product.active,
            product = this.props.products.list[id]

        return (<div className="product">
            <div className="product__shadow"></div>
            <div className="product__window">
                <div className="product__about">
                    <h1 className="product__title">{product.name}</h1>
                    <div className="product__ingre">Копченый лосось, сливочный сыр, омлет, огурец, cпринг тесто</div>
                    {(product.weight) ? <div className="product__weight">{product.weight} г</div> : ""}
                    {(product.weight) ? <div className="product__price">{product.price} ₽</div> : ""}
                    <div className="product__image">
                        <img src={product.image_big} alt={product.name}/>
                    </div>
                </div>
                <div className="product__other">
                    <div className="product-other">
                        <div className="product-other__title">Соус</div>
                        <div className="product-other__action">
                            <div className="product-sauce">
                                <select className="product-sauce__select" ref="sause" value={this.state.sause} onChange={this.changeSause}>
                                    <option value="0" disabled="disabled">Выберите…</option>
                                    <option value="1">Сырный</option>
                                    <option value="2">Соевый</option>
                                </select>
                                <i>{Icon.arrow_down}</i>
                            </div>
                        </div>
                    </div>
                    <div className="product-other">
                        <div className="product-other__title">Запечь</div>
                        <div className="product-other__action">
                            <div className="product-bake">
                                <div className="product-bake__price">
                                    +30 ₽
                                </div>
                                <div className={"product-bake__action"+((this.state.bake) ? " product-bake__action_active" : "")} onClick={this.changeBake}>
                                    <span>{Icon.fire}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-other">
                        <div className="product-other__title">Топпинги</div>
                        <div className="product-other__action">
                            <div className="product-toppings-count">
                                {[0,1,2].map((item) => {
                                    return <div className={"product-toppings-count__item"+((Object.keys(this.state.toppings).length > item) ? " product-toppings-count__item_active" : "")} key={item}></div>
                                })}
                            </div>
                        </div>
                    </div>
                    <SwiperContainer
                        className={"product-toppings"+((Object.keys(this.state.toppings).length === 3) ? " product-toppings_all" : "")}
                        options={{
                            direction: 'vertical',
                            slidesPerView: 'auto',
                            scrollbar: '.swiper-scrollbar',
                            scrollbarHide: true,
                            mousewheelControl: true,
                            freeMode: true,
                            simulateTouch: false
                        }}
                    >
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((item) => {
                            return (
                                <div className="swiper-slide" key={item}>
                                    <div className={"product-toppings__item"+((this.state.toppings[item] === true) ? " product-toppings__item_active" : "")} key={item} onClick={this.changeTopping.bind(this, item)}>
                                        <div className="product-toppings__name">Авокадо</div>
                                        <div className="product-toppings__group">
                                            <div className="product-toppings__price">+15 ₽</div>
                                            <div className="product-toppings__action">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}
                    </SwiperContainer>

                </div>
                <div className="product__final">
                    <div className="product-value">
                        <div className="product-value__item">
                            <div className="product-value__about">
                                <div className="product-value__name">Белки, г</div>
                                <div className="product-value__value">100</div>
                            </div>
                            <div className="product-value__line">
                                <div style={{width: "40%"}}></div>
                            </div>
                        </div>
                        <div className="product-value__item">
                            <div className="product-value__about">
                                <div className="product-value__name">Белки, г</div>
                                <div className="product-value__value">100</div>
                            </div>
                            <div className="product-value__line">
                                <div style={{width: "40%"}}></div>
                            </div>
                        </div>
                        <div className="product-value__item">
                            <div className="product-value__about">
                                <div className="product-value__name">Белки, г</div>
                                <div className="product-value__value">100</div>
                            </div>
                            <div className="product-value__line">
                                <div style={{width: "40%"}}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="product-count">
                            <div className={"product-count__action product-count__action_minus"+((this.state.count == 1) ? " product-count__action_disable" : "")} onClick={this.count.bind(this, 'minus')}></div>
                            <div className="product-count__value">{this.state.count}</div>
                            <div className="product-count__action product-count__action_plus" onClick={this.count.bind(this, 'plus')}></div>
                        </div>
                        <div className="product__price">{product.price} ₽</div>
                        <div className="product__buy button button_big button_fill">В корзину</div>
                    </div>
                </div>
                {(this.props.product.category) ? (
                    <Link to={"/catalog/"+this.props.product.category} className="product__close">{Icon.close}</Link>
                ) : (
                    <div className="product__close" onClick={this.close}>{Icon.close}</div>
                )}

            </div>
        </div>)
    }
})


var mapStateToProps = function(store) {
    return {
        product: store.product,
        products: store.products
    }
}


module.exports = connect(mapStateToProps)(ProductContainer)