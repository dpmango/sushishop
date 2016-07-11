const ShopsContainer = React.createClass({
    render: function() {
        return (
            <div className="shops">
                <Swiper
                    slidesPerView='auto'
                    freeMode={true}
                    scrollbar=".swiper-scrollbar"
                    scrollbarHide={false}
                    className="shops__list"
                    scrollbar=".swiper-scrollbar"
                    direction="vertical"
                    mousewheelControl={true}
                    grabCursor={false}
                >
                    <div className="swiper-slide">
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                    </div>
                </Swiper>
            </div>
        );
    }
});

const mapStateToProps = function(store) {
    return {
        city: store.city
    }
};


module.exports = connect(mapStateToProps)(ShopsContainer);