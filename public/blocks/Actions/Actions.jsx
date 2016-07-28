const ActionsContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: "GET_ACTIONS"
        })
    },
    Action: function () {
        var data = this.props.actions[this.props.params.actionAlt];
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
        if (this.props.actions.status == 'load') {
            return (
                <div className="actions">
                    {(this.props.params.actionAlt) ? this.Action() : ''}
                    {(this.props.params.actionAlt) ? <h2 className="actions__title">Другие акции</h2> : <h1 className="actions__title">Акции</h1>}
                    <div className="actions__list">
                        {this.props.actions.forEach((item) => {
                            return (<div className="actions__item" key={'action'+item.id}>
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
        } else {
            return <div></div>
        }
    }
});

const mapStateToProps = function(store) {
    return {
        actions: store.actions.list
    }
};

module.exports = connect(mapStateToProps)(ActionsContainer);