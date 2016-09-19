var isNode = typeof window === 'undefined';

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="catalog" component={Catalog}>
            <IndexRedirect to="rolls" />
            <Route path=":categoryId" component={CatalogCategory}>
                <Route path=":productId" component={CatalogProduct}/>
            </Route>
        </Route>
        <Route path="actions" component={Actions}>
            <Route path=":actionAlt" component={CatalogProduct}/>
        </Route>
        <Route path="shops" component={Shops} />
        <Route path="about" component={About} />
        <Route path="job" component={Job} />
        <Route path="*" component={NotFound}/>
    </Route>
)

module.exports = (
    (isNode) ? (
        routes
    ) : (
        <Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>
    )
);