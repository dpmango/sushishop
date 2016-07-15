const CatalogListCategoryItem = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState, nextContext) {
        return (this.props.alt == nextProps.activeCatagory || this.props.alt == this.props.activeCatagory);
    },
    render: function () {
        return (
            <div>
                <Link to={'/catalog/'+this.props.alt} className="catalog-list-category__item" activeClassName="catalog-list-category__item_active">
                    <picture className="catalog-list-category__photo">
                        <source media="(min-width: 800px)" srcSet={this.props.image_medium}/>
                        <img srcSet={this.props.image_small} alt=""/>
                    </picture>
                    <div className="catalog-list-category__name">{this.props.name}</div>
                </Link>
            </div>
        )
    }
});


const CatalogListCategoryContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_CATALOG'
        });
    },
    render: function() {
        return (
            <div className={"catalog-list-category catalog-list-category_"+this.props.align}>
                <Swiper
                    slidesPerView='auto'
                    simulateTouch={true}
                    grabCursor={true}
                    destroy={600}
                    freeMode={true}
                    className="catalog-list-category__wrapper"
                >
                    {this.props.catalog.map((item) => {
                        item.activeCatagory = this.props.activeCategory;
                        return (
                            <div key={'catalog-list-category-'+item.id} className="catalog-list-category__item-outer">
                                <CatalogListCategoryItem {...item} />
                            </div>
                        );
                    })}
                </Swiper>
            </div>
        )
    }
});


const mapStateToProps = function(store) {
    return {
        catalog: store.catalog.list
    }
};


module.exports = connect(mapStateToProps)(CatalogListCategoryContainer);