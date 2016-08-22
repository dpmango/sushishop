module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <CatalogListCategory activeCategory={this.props.params.categoryId} align="top" />
                { this.props.children }
                <CatalogListCategory activeCategory={this.props.params.categoryId} align="bottom" />
            </div>

        );
    }
})