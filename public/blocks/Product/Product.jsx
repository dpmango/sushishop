var ProductContainer = React.createClass({
    close: function () {
        store.dispatch({
            type: 'PRODUCT_HIDE'
        })
    },

    render: function () {
        return (<div className="product">
            <div className="product__shadow"></div>
            <div className="product__window">
                <div className="product__about">
                    <h1 className="product__title">СПРИНГ-РОЛЛ С КОПЧЕНЫМ ЛОСОСЕМ</h1>
                    <div className="product__ingre">Копченый лосось, сливочный сыр, омлет, огурец, cпринг тесто</div>
                    <div className="product__weight">250 г</div>
                    <div className="product__price">299 ₽</div>
                    <div className="product__image">
                        <img src="http://sushi.endy.pro/upload/endy_module_images/images_items/big/25dzuafxz5d.jpg" alt="СПРИНГ-РОЛЛ С КОПЧЕНЫМ ЛОСОСЕМ"/>
                    </div>
                </div>
                <div className="product__other">
                    <div className="product-other">
                        <div className="product-other__title">Соус</div>
                        <div className="product-other__action">
                            <div className="product-sauce">
                                <select className="product-sauce__select" value="">
                                    <option value="" disabled="disabled">Выберите…</option>
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
                                <div className="product-bake__action">
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
                                    return <div className="product-toppings-count__item" key={item}></div>
                                })}
                            </div>
                        </div>
                    </div>
                    <Swiper
                        className="product-toppings"
                        options={{
                            direction: 'vertical',
                            slidesPerView: 'auto',
                            scrollbar: '.swiper-scrollbar',
                            scrollbarHide: true,
                            mousewheelControl: true,
                            freeMode: true
                        }}
                    >
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((item) => {
                            return (
                                <div className="swiper-slide" key={item}>
                                    <div className="product-toppings__item" key={item}>
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
                    </Swiper>

                </div>
                <div className="product__final">
                    <div className="product-value">
                        <div className="product-value__item">
                            <div className="product-value__about">
                                <div className="product-value__name">Белки, г</div>
                                <div className="product-value__value">100</div>
                            </div>
                            <div className="product-value__line">
                                <div width="40%"></div>
                            </div>
                        </div>
                    </div>
                    <div className="product-count">
                        <div className="product-count_action product-count_action_minus">&minus;</div>
                        <div className="product-count_value">1</div>
                        <div className="product-count_action product-count_action_plus">+</div>
                    </div>
                    <div className="product__price">299 ₽</div>
                    <div className="product__buy button">В корзину</div>
                </div>
                <div className="product__close" onClick={this.close}>{Icon.close}</div>
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