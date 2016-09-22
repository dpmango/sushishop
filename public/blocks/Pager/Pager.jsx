module.exports = React.createClass({
    render: function() {
        return (
            <div className="pager">
                <div className="pager__head">
                    <picture className="pager__bg">
                        <source media="(min-width: 1000px)" srcSet="/f/images/pager/bg-big.jpg"/>
                        <source media="(max-width: 1000px) and (min-width: 450px), (max-width: 575px) and (min-width: 400px)" srcSet="/f/images/pager/bg-medium.jpg"/>
                        <source media="(max-width: 450px)" srcSet="/f/images/pager/bg-small.jpg"/>
                        <img src="/f/images/pager/bg-big.jpg" alt=""/>
                    </picture>
                    <div className="pager__wrapper">
                        <div className="pager__logo">{Icon.logoIcon}</div>
                        <div className="pager__title">Жизнь&nbsp;&mdash; чтобы наслаждаться&nbsp;ей.<br /> СушиШоп, чтобы готовить!</div>
                    </div>
                </div>

                <div className="pager__links">
                    <SwiperContainer
                        className="pager__wrapper"
                        options={{
                            pagination: ".swiper-pagination",
                            paginationClickable: true,
                            simulateTouch: false,
                            slidesPerView: 3,
                            spaceBetween: 0,
                            touchRatio: 0,
                            breakpoints: {
                                900: {
                                    slidesPerView: 2,
                                    touchRatio: 1
                                },
                                500: {
                                    slidesPerView: 1,
                                    touchRatio: 1
                                }
                            }
                        }}
                    >
                        <div className="swiper-slide">
                            <Link to="/about" className="pager-link">
                                <div className="pager-link__photo">
                                    <div className="pager-link__photo-wrapper">
                                        <img src="/f/images/pager/philosophy.jpg" alt="Философия СушиШопа"/>
                                    </div>
                                </div>
                                <div className="pager-link__wrapper">
                                    <div className="pager-link__category">Философия</div>
                                    <div className="pager-link__name">Вкусная еда чтобы освободить время для&nbsp;приятного</div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="/job" className="pager-link">
                                <div className="pager-link__photo">
                                    <div className="pager-link__photo-wrapper">
                                        <img src="/f/images/pager/career.jpg" alt="Карьера в СушиШопе"/>
                                    </div>
                                </div>
                                <div className="pager-link__wrapper">
                                    <div className="pager-link__category">Карьера</div>
                                    <div className="pager-link__name">Путь от&nbsp;менеджера до&nbsp;регионального директора за&nbsp;365&nbsp;дней</div>
                                </div>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="#" className="pager-link">
                                <div className="pager-link__photo">
                                    <div className="pager-link__photo-wrapper">
                                        <div className="pager-link__photo-wrapper">
                                            <img src="/f/images/pager/journal.jpg" alt="Журнал СушиШопа"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="pager-link__wrapper">
                                    <div className="pager-link__category">Журнал</div>
                                    <div className="pager-link__name">Развернуто о&nbsp;вкусной и&nbsp;здоровой пище, а&nbsp;так&nbsp;же где&nbsp;её&nbsp;купить</div>
                                </div>
                            </Link>
                        </div>
                    </SwiperContainer>
                </div>
            </div>
        );
    }
});