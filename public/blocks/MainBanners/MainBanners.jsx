module.exports = React.createClass({
    componentDidMount: function () {
        document.querySelector('.main-banners').swiper.onResize();
    },
    render: function() {
        return (
            <Swiper
                effect="fade"
                paginationClickable={true}
                nextButton='.swiper-button-next'
                prevButton='.swiper-button-prev'
                simulateTouch={false}
                prevButtonContent={Icon.arrow}
                nextButtonContent={Icon.arrow}
                className="main-banners"
                onInit={function() {
                    setTimeout(function() {
                        
                    }, 1);
                }}
            >
                <div>
                    <MainBanner
                        name="swagset"
                        bgImage="/f/images/banners/swagset-bg.jpg"
                        productImage="/f/images/banners/swagset-product.png"
                        labelImage="/f/images/banners/swagset-label.png"
                        category="Набор"
                        price={399}
                        priceOld={420}
                        weight={880}
                        count={20}
                        part="Ролл Филадельфия, ролл Калифорния, Чикен Спайси, ролл с тунцом, чиз чикен и снэк ролл"
                    />
                </div>
                <div>
                    <MainBanner
                        name="superhero"
                        bgImage="/f/images/banners/superhero-bg.jpg"
                        productImage="/f/images/banners/superhero-product.png"
                        labelImage="/f/images/banners/superhero-label.png"
                        category="Набор"
                        price={399}
                        priceOld={420}
                        weight={880}
                        count={20}
                        part="Ролл Филадельфия, ролл Калифорния, Чикен Спайси, ролл с тунцом, чиз чикен и снэк ролл"
                    />
                </div>
            </Swiper>
        )
    }
});