const CatalogProductContainer = React.createClass({
    
    render: function() {
        return (
            <div></div>
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