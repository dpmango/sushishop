const MainCatalogContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_CATALOG'
        });
    },
    render: function() {
        const createCatalog = function (item) {
            return (
                <div className={'main-catalog-item main-catalog-item_'+item.alt} key={'main_catalog_'+item.id}>
                    <Link to={'/catalog/'+item.alt} className="main-catalog-item__wrapper">
                        <picture className="main-catalog-item__photo">
                            <source media="(min-width: 1125px)" srcSet={item.image_big}/>
                            <source media="(min-width: 900px)" srcSet={item.image_medium}/>
                            <source media="(min-width: 575px)" srcSet={item.image_big}/>
                            <source media="(min-width: 400px)" srcSet={item.image_medium}/>
                            <img srcSet={item.image_small} alt=""/>
                        </picture>
                        <div className="main-catalog-item__name">{item.name}</div>
                    </Link>
                </div>
            )
        };
        return (
            <div className="main-catalog">
                <h2 className="main-catalog__title">Выберите категорию меню</h2>
                <div className="main-catalog__list">
                    {this.props.catalog.map(createCatalog)}
                </div>
            </div>
        )
    }
});


const mapStateToProps = function(store) {
    return {
        catalog: store.catalog.list
    }
};


module.exports = connect(mapStateToProps)(MainCatalogContainer);