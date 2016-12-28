const JournalContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_JOURNAL'
        })
        store.dispatch({
            type: 'GET_JOURNAL_CATEGORY'
        })

        store.dispatch({
            type: "SET_META",
            title: `Журнал Суши Шопа`
        })
    },
    render: function() {
        return <div className="journal">
            <div className="journal__header">
                <h1 className="journal__title">Журнал</h1>
                <div className="journal-category">
                    {this.props.journalCategory.map((item) => {
                        return <Link to={"/journal/"+((this.props.params.categoryAlt == item.alt) ? '' : item.alt)} className={"journal-category__item"+((this.props.params.categoryAlt == item.alt) ? ' journal-category__item_active' : '')} key={item.alt}><span>{item.name}</span></Link>
                    })}
                </div>
            </div>
            <div className="journal__list">
                {this.props.journal.map((item) => {
                    let category = this.props.journalCategory.filter((category) => {
                        if (category.id == item.category[0]) return category
                    })[0].alt
                    if (this.props.params.categoryAlt && this.props.params.categoryAlt != category) return
                    return <JournalItem
                        key={item.id}
                        name={item.name}
                        alt={category+'/'+item.alt}
                        bg_to={item.bg_to}
                        bg_from={item.bg_from}
                        image_medium={item.image_medium}
                        category={item.category}
                        descr={item.descr}
                    />
                })}
            </div>
        </div>
    }
});


const mapStateToProps = function(store) {
    return {
        journal: store.journal,
        journalCategory: store.journalCategory
    }
};


module.exports = connect(mapStateToProps)(JournalContainer);