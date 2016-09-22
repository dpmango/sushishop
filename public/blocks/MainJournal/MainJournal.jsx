function MainJournalShadow(swiper) {
    var blockList = document.querySelector('.main-journal__list'),
        beginClass = 'main-journal__list_begin',
        endClass = 'main-journal__list_end';
    if (swiper.isBeginning && !blockList.classList.contains(beginClass)) {
        blockList.classList.add(beginClass);
    }
    if (!swiper.isBeginning && blockList.classList.contains(beginClass)) {
        blockList.classList.remove(beginClass);
    }
    if (swiper.isEnd && !blockList.classList.contains(endClass)) {
        blockList.classList.add(endClass);
    }
    if (!swiper.isEnd && blockList.classList.contains(endClass)) {
        blockList.classList.remove(endClass);
    }
}


module.exports = React.createClass({
    render: function() {
        return (
            <div className="main-journal">
                <h2 className="main-journal__title">Тем временем в&nbsp;журнале</h2>
                <SwiperContainer
                    className="main-journal__list"
                    destroy={400}
                    options={{
                        slidesPerView: 'auto',
                        freeMode: true,
                        scrollbar: ".swiper-scrollbar",
                        scrollbarHide: false,
                        grabCursor: true,
                        onTouchMove: MainJournalShadow,
                        onInit: MainJournalShadow,
                        onTransitionEnd: MainJournalShadow,
                        spaceBetween: 20,
                        className: "main-journal__list-wrapper",
                        breakpoints: {
                            900: {
                                spaceBetween: 0
                            }
                        }
                    }}
                >
                    <div className="swiper-slide">
                        <JournalItem
                            name="Открываем два СушиШопа в&nbsp;Нарьян-Маре"
                            alt="open-narian-mare"
                            bg_to="#FBD249"
                            bg_from="#F5A623"
                            category={[1,2]}
                            descr="В&nbsp;краю холодных рек и&nbsp;озёр совсем скоро откроется самое тёплое и&nbsp;гостепреимное место, в&nbsp;котором можно купить что-нибудь вкусненькое."
                        />
                    </div>
                    <div className="swiper-slide">
                        <JournalItem
                            name="Готовим ролл с&nbsp;угрём"
                            alt="open-narian-mare"
                            image_medium="/f/images/journal/open-narian-mare-medium.jpg"
                            image_small="/f/images/journal/open-narian-mare-small.jpg"
                            category={[1,2]}
                        />
                    </div>
                    <div className="swiper-slide">
                        <JournalItem
                            name="Открываем два СушиШопа в&nbsp;Нарьян-Маре"
                            alt="gourmet-home"
                            image_medium="/f/images/journal/gourmet-home-medium.jpg"
                            image_small="/f/images/journal/gourmet-home-small.jpg"
                            category={[1,2]}
                        />
                    </div>
                    <div className="swiper-slide">
                        <JournalItem
                            name="Открываем два СушиШопа в&nbsp;Нарьян-Маре"
                            alt="open-narian-mare"
                            bg_to="#FBD249"
                            bg_from="#F5A623"
                            category={[1,2]}
                            descr="В&nbsp;краю холодных рек и&nbsp;озёр совсем скоро откроется самое тёплое и&nbsp;гостепреимное место, в&nbsp;котором можно купить что-нибудь вкусненькое."
                        />
                    </div>
                    <div className="swiper-slide">
                        <JournalItem
                            name="Готовим ролл с&nbsp;угрём"
                            alt="open-narian-mare"
                            image_medium="/f/images/journal/open-narian-mare-medium.jpg"
                            image_small="/f/images/journal/open-narian-mare-small.jpg"
                            category={[1,2]}
                        />
                    </div>
                    <div className="swiper-slide">
                        <JournalItem
                            name="Открываем два СушиШопа в&nbsp;Нарьян-Маре"
                            alt="gourmet-home"
                            image_medium="/f/images/journal/gourmet-home-medium.jpg"
                            image_small="/f/images/journal/gourmet-home-small.jpg"
                            category={[1,2]}
                        />
                    </div>
                </SwiperContainer>
                <div className="main-journal__more">
                    <Link to="/journal/" className="button button_border button_medium">Все записи журнала</Link>
                </div>
            </div>
        );
    }
});