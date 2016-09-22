var BannersContainer = React.createClass({
    componentWillMount: function() {
        if (this.props.iam.cityId && this.props.iam.shopId) {
            store.dispatch({
                type: 'GET_BANNERS',
                city_id: this.props.iam.cityId,
                shop_id: this.props.iam.shopId
            })
        }
    },
    render: function() {
        return (
            <SwiperContainer
                className= "main-banners"
                prevButtonContent={Icon.arrow}
                nextButtonContent={Icon.arrow}
                options={{
                    pagination: ".swiper-pagination",
                    paginationClickable: true,
                    effect: "fade",
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    simulateTouch: false,
                    className: "main-banners",
                    slidesPerView: 1,
                    spaceBetween: 0
                }}
            >
                {this.props.banners.map((item) => {
                    return (
                        <MainBanner
                            key={item.id}
                            id={item.id}
                            bgImage={item.product_bg}
                            productImage={item.product_image}
                            labelImage={item.label_image}
                            category={item.category}
                            price={item.price}
                            priceOld={item.price_old}
                            weight={item.weight}
                            count={item.count}
                            part={item.part}
                        />
                    )
                })}
            </SwiperContainer>
        )
    }
});


var mapStateToProps = function(store) {
    return {
        iam: store.iam,
        banners: store.banners,
    }
};


module.exports = connect(mapStateToProps)(BannersContainer)