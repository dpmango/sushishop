const JournalArticleContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: "GET_JOURNAL_ARTICLE",
            alt: this.props.routeParams.articleAlt
        })
        store.dispatch({
            type: "GET_JOURNAL_CATEGORY"
        })
    },
    render: function() {
        let item = this.props.journalArticle
        return <div className="journal-article">
            <div className="journal-article__wrapper">
                <Link to="/journal" className="journal-article__section">Журнал</Link>
                <h1 className="journal-article__title">{item.name}</h1>
                <div className="journal-article__category">
                    {item.category.map((category) => {
                        let itemCategory = this.props.journalCategory.filter((a) => {
                            if (a.id == category) return a
                        })

                        return <Link to={"/journal/"+itemCategory[0].alt} key={category}>{itemCategory[0].name}</Link>
                    })}
                </div>
                <div className="journal-article__area">
                    <div className="journal-article-social journal-article__social">
                        <div className="journal-article-social__label">Понравился рецепт, расскажите друзьям</div>
                        <div className="journal-article-social__links">
                            <div className="journal-article-social__link journal-article-social__link_vk">{Icon.vk}</div>
                            <div className="journal-article-social__link journal-article-social__link_fb">{Icon.fb}</div>
                            <div className="journal-article-social__link journal-article-social__link_ok">{Icon.ok}</div>
                        </div>
                    </div>
                    <div className="journal-article__article"  dangerouslySetInnerHTML={{__html: item.content}}  />
                </div>
            </div>
        </div>
    }
});


const mapStateToProps = function(store) {
    return {
        journalArticle: store.journalArticle,
        journalCategory: store.journalCategory
    }
};


module.exports = connect(mapStateToProps)(JournalArticleContainer);