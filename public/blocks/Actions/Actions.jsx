const ActionsContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: "GET_ACTIONS",
            city_id: this.props.iam.cityId
        })
    },
    Action: function () {
        var data = this.props.actions.list[this.props.actions.alt[this.props.params.actionAlt]];
        return (<div className="action">
            <div className="action__wrapper">
                <div className="action__image">
                    <img src={data.image_big} alt=""/>
                </div>
                <div className="action__category">Акции</div>
                <h1 className="action__title" dangerouslySetInnerHTML={{ __html: data.name  }} />
                <div className="action__content" dangerouslySetInnerHTML={{ __html: data.content  }} />
                <div className="action__addition" dangerouslySetInnerHTML={{ __html: data.addition  }} />
            </div>
        </div>)
    },
    render: function () {
        return (
            <div className="actions">
                {(this.props.params.actionAlt) ? this.Action() : ''}
                {(this.props.params.actionAlt) ? <h2 className="actions__title">Другие акции</h2> : <h1 className="actions__title">Акции</h1>}
                <div className="actions__list">
                    {this.props.actions.sort.map((id) => {
                        let item = this.props.actions.list[id]
                        return (<div className="actions__item" key={item.id}>
                            <Link to={"/actions/"+item.alt} className="actions-item">
                                <div className="actions-item__image">
                                    <img src={item.image_small} alt={item.name}/>
                                </div>
                                <div className="actions-item__category">Акции</div>
                                <h3 className="actions-item__name">{item.name}</h3>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
})

const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        actions: store.actions
    }
};

module.exports = connect(mapStateToProps)(ActionsContainer);