const CatalogContainer = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.params.categoryId}
            </div>
        );
    }
});

const mapStateToProps = function(store) {
    return {
        name: store.name
    }
};


module.exports = connect(mapStateToProps)(CatalogContainer);