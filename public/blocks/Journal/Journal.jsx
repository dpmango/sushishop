const JournalContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_JOURNAL'
        })
        store.dispatch({
            type: 'GET_JOURNAL_CATEGORY'
        })
    },
    render: function() {
        return <div className="journal">
            <h1 className="journal__title">Журнал</h1>
            <div className="journal__list">
                {this.props.journal.map((item) => {
                    let category = this.props.journalCategory.filter((category) => {
                        if (category.id == item.category[0]) return category
                    })[0].alt
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