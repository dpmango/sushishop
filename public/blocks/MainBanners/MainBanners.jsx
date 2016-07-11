const BannersContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_BANNERS'
        });
    },
    render: function() {
        const createBanner = function (item) {
            return (
                <div key={'swiper-main-banner-'+item.id}>
                    <MainBanner
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
                </div>
            )
        };
        return (
            <Swiper
                pagination=".swiper-pagination"
                paginationClickable={true}
                effect="fade"
                nextButton='.swiper-button-next'
                prevButton='.swiper-button-prev'
                simulateTouch={false}
                prevButtonContent={Icon.arrow}
                nextButtonContent={Icon.arrow}
                className="main-banners"
                slidesPerView={1}
                spaceBetween={0}
            >
                {this.props.banners.map(createBanner)}
            </Swiper>
        )
    }
});


const mapStateToProps = function(store) {
    return {
        banners: store.banners
    }
};


module.exports = connect(mapStateToProps)(BannersContainer);