const CatalogListCategoryItem = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState, nextContext) {
        return (this.props.alt == nextProps.activeCatagory || this.props.alt == this.props.activeCatagory);
    },
    render: function () {
        return (
            <div className="catalog-list-category__item-outer swiper-slide">
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
            type: 'GET_CATALOG',
            city_id: this.props.iam.cityId,
            shop_id: this.props.iam.shopId
        });
    },
    render: function() {
        return (
            <div className={"catalog-list-category catalog-list-category_"+this.props.align}>
                <Swiper
                    className="catalog-list-category__wrapper"
                    options={{
                        slidesPerView: 'auto',
                        simulateTouch: true,
                        grabCursor: true,
                        destroy: 600,
                        freeMode: true
                    }}
                >
                    {this.props.catalog.sort.map((id) => {
                        let item = this.props.catalog.list[id]
                        item.activeCatagory = this.props.activeCategory
                        return (
                            <CatalogListCategoryItem {...item} key={'catalog-list-category-'+item.id} />
                        );
                    })}
                </Swiper>
            </div>
        )
    }
});


const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        catalog: store.catalog
    }
};


module.exports = connect(mapStateToProps)(CatalogListCategoryContainer);