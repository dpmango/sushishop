module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <CatalogListCategory activeCategory={this.props.params.categoryId} align="top" />
                <CatalogListCategory activeCategory={this.props.params.categoryId} align="bottom" />
            </div>

        );
    }
});