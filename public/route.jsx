module.exports = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}/>
                <Route path="catalog" component={Catalog}>
                    <IndexRedirect to="rolls" />
                    <Route path=":categoryId" component={CatalogCategory}>
                        <Route path=":productId" component={CatalogProduct}/>
                    </Route>
                </Route>
            </Route>
        </Router>
    </Provider>
);