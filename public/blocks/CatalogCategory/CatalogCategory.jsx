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
        return (
            <div>
                <div>
                    {this.props.products.category[this.state.category_id].map((id) => {
                        let item = this.props.products.list[id]
                        let link = '/catalog/'+this.props.catalog.list[this.state.category_id].alt+'/'+item.alt
                        return (<Link to={link} key={item.id}>
                            <div>
                                <img src={item.image_small} alt={item.name}/>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.label}</div>
                            <div>{item.price}</div>
                        </Link>)
                    })}
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