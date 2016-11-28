const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="catalog" component={Catalog}>
            <IndexRedirect to="rolls" />
            <Route path=":categoryId/:productId" component={CatalogCategory} />
            <Route path=":categoryId" component={CatalogCategory} />
        </Route>
        <Route path="actions/:actionAlt" component={Actions} />
        <Route path="actions" component={Actions} />
        <Route path="shops" component={Shops} />
        <Route path="about" component={About} />
        <Route path="job" component={Job} />
        <Route path="journal/:categoryAlt/:articleAlt" component={JournalArticle} />
        <Route path="journal/:categoryAlt" component={Journal} />
        <Route path="journal" component={Journal} />
        <Route path="*" component={NotFound}/>
    </Route>
)

module.exports = (
    (IS_NODE) ? (
        routes
    ) : (
        <Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
        </Provider>
    )
);