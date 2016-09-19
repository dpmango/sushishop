const CatalogContainer = React.createClass({
    getInitialState: function () {
        let category_id = this.props.catalog.url[this.props.params.categoryId]
        return {
            category_id: category_id,
            indexLastTag: 0
        }
    },
    componentWillMount: function () {
        store.dispatch({
            type: 'GET_PRODUCTS',
            get_products: true
        })
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (this.props.params.categoryId != nextProps.params.categoryId) {
            this.setState({
                category_id: this.props.catalog.url
            })
            return true
        } else {
            return false
        }
    },
    tags: function () {
        if (isNode) return

        let el = this.refs.tags,
            first = el.children[0].offsetTop,
            isNext = false

        Array.prototype.map.call(el.children, (item, key) => {
            if (first < item.offsetTop || isNext) {
                item.classList.add('catalog-tags__item_hide')

                el.children[key - 1].classList.add('catalog-tags__item_hide')
                el.children[key - 2].classList.add('catalog-tags__item_hide')

                isNext = true
            }
        })

        let more = document.createElement('div')
        more.classList.add('catalog-tags__more')
        more.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 3"><circle cx="1.5" cy="1.5" r="1.5"/><circle cx="6.5" cy="1.5" r="1.5"/><circle cx="11.5" cy="1.5" r="1.5"/></svg>`
        el.querySelector('.catalog-tags__item_hide').before(more.cloneNode(true))
    },
    componentDidMount: function() {
        this.tags()
    },
    render: function() {
        const products = this.props.products.category[this.state.category_id]
        const category = this.props.catalog.list[this.state.category_id]

        const tags = [
            "Острое",
            "Лёгкое",
            "С угрём",
            "Без шампиньонов",
            "Без бекона",
            "Без лука",
            "Без перца халапеньо",
            "Без болгарского перца",
            "Без маслин",
            "Без мяса"
        ]
        let i = 0
        return (
            <div>
                <div className="catalog">
                    <h1 className="catalog__title">{category.name}</h1>
                    <div className="catalog-tags" ref="tags">
                        {tags.map((item) => {
                            return <div className="catalog-tags__item" key={item}>{item}</div>
                        })}
                    </div>
                    <div className="catalog__list">
                        {(products) ? products.map((id) => {
                            let item = this.props.products.list[id]
                            item = Object.assign(item, {link: '/catalog/'+this.props.catalog.list.alt+'/'+item.alt})
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