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


const MainJournalContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_JOURNAL'
        })
        store.dispatch({
            type: 'GET_JOURNAL_CATEGORY'
        })
    },
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
                    {this.props.journal.map((item) => {
                        let category = this.props.journalCategory.filter((category) => {
                            if (category.id == item.category[0]) return category
                        })[0].alt
                        return <div className="swiper-slide" key={item.id}>
                            <JournalItem
                                name={item.name}
                                alt={category+'/'+item.alt}
                                bg_to={item.bg_to}
                                bg_from={item.bg_from}
                                image_medium={item.image_medium}
                                category={item.category}
                                descr={item.descr}
                            />
                        </div>
                    })}
                </SwiperContainer>
                <div className="main-journal__more">
                    <Link to="/journal/" className="button button_border button_medium">Все записи журнала</Link>
                </div>
            </div>
        );
    }
});

const mapStateToProps = function(store) {
    return {
        journal: store.journal,
        journalCategory: store.journalCategory,
    }
};


module.exports = connect(mapStateToProps)(MainJournalContainer);