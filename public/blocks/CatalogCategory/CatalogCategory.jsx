const CatalogContainer = React.createClass({
    componentDidMount: function() {
        store.dispatch({
            type: 'EDIT_NAME',
            name: 'Лена'
        })
    },
    render: function() {
        return (
            <div>{this.props.name}</div>
        );
    }
});

const mapStateToProps = function(store) {
    return {
        name: store.name
    }
};


module.exports = connect(mapStateToProps)(CatalogContainer);