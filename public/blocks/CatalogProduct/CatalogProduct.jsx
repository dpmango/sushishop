const CatalogProductContainer = React.createClass({
    componentDidMount: function() {
        store.dispatch({
            type: 'PRODUCT_SHOW',
            active: 1
        })
    },
    render: function() {
        return (
            <div>
            </div>
        );
    }
});


const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        catalog: store.catalog
    }
};


module.exports = connect(mapStateToProps)(CatalogProductContainer);