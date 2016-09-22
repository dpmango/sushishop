const CatalogContainer = React.createClass({
    componentWillMount: function () {
        store.dispatch({
            type: 'GET_PRODUCTS'
        })

        console.log(this.props.params)

        if (this.props.params.productId != 0) {
            store.dispatch({
                type: 'PRODUCT_SHOW',
                active: this.props.products.url[this.props.params.productId],
                category: this.props.params.categoryId
            })
        }
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        if (nextProps.params.productId) {
            store.dispatch({
                type: 'PRODUCT_SHOW',
                active: nextProps.products.url[nextProps.params.productId],
                category: this.props.params.categoryId
            })
        } else {
            store.dispatch({
                type: 'PRODUCT_HIDE'
            })
        }

        return this.props.params.categoryId !== nextProps.params.categoryId
    },
    tags: function () {
        if (IS_NODE) return

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
        if (el.querySelector('.catalog-tags__item_hide')) {
            el.querySelector('.catalog-tags__item_hide').before(more.cloneNode(true))
            document.querySelector('.catalog-tags__more').addEventListener('click', (e) => {
                this.more()
                e.preventDefault()
            })
        }
    },
    more: function () {
        this.refs.tags.classList.add('catalog-tags_show')
    },
    componentDidMount: function() {
        this.tags()
    },
    render: function() {
        const category_id = this.props.catalog.url[this.props.params.categoryId],
            products = this.props.products.category[category_id],
            category = this.props.catalog.list[category_id]

        let i = 0
        return (
            <div>
                <div className="catalog">
                    <h1 className="catalog__title">{category.name}</h1>
                    <div className="catalog-tags" ref="tags">
                        {category.tags.map((item) => {
                            return <div className="catalog-tags__item" key={item.id}>{item.title}</div>
                        })}
                    </div>
                    <div className="catalog__list">
                        {(products) ? products.map((id) => {
                            let item = this.props.products.list[id]
                            item = Object.assign(item, {link: '/catalog/'+category.alt+'/'+item.alt})
                            return (<ProductItem {...item} key={item.id} />)
                        }) : ''}
                    </div>
                </div>
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