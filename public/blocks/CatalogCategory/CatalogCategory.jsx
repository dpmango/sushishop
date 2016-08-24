const CatalogContainer = React.createClass({
    getInitialState: function () {
        let category_id = this.props.catalog.url[this.props.params.categoryId]
        return {
            category_id: category_id
        }
    },
    componentWillMount: function () {
        store.dispatch({
            type: 'GET_PRODUCTS',
            city_id: this.props.iam.cityId,
            shop_id: this.props.iam.shopId
        })
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.params.categoryId != nextProps.params.categoryId) {
            this.setState({
                category_id: this.props.catalog.url[this.props.params.categoryId]
            })
            return true
        } else {
            return false
        }
    },
    render: function() {
        const products = this.props.products.category[this.state.category_id]
        const category = this.props.catalog.list[this.state.category_id]
        return (
            <div>
                <div className="catalog">
                    <h1 className="catalog__title">{category.name}</h1>
                    <div className="catalog-tags">
                        <div className="catalog-tags__item">ЧТО-НИБУДЬ ОСТРОЕ</div>
                        <div className="catalog-tags__item">ЛЕГКОЕ</div>
                        <div className="catalog-tags__item">С УГРЕМ</div>
                        <div className="catalog-tags__item">ЧТО-НИБУДЬ ОСТРОЕ</div>
                    </div>
                    <div className="catalog__list">
                        {(products) ? products.map((id) => {
                            let item = this.props.products.list[id]
                            item = Object.assign(item, {link: '/catalog/'+this.props.catalog.list[this.state.category_id].alt+'/'+item.alt})
                            return (<ProductItem {...item} key={item.id} />)
                        }) : ''}
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
});

const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        catalog: store.catalog,
        products: store.products
    }
};


module.exports = connect(mapStateToProps)(CatalogContainer);