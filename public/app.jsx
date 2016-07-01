Router = require('react-router');
Route = Router.Route;
Link = Router.Link;
browserHistory = Router.browserHistory;
IndexRoute = Router.IndexRoute;
IndexRedirect = Router.IndexRedirect;
Router = Router.Router;
objectAssign = require('object-assign');
Redux = require('redux');
createStore = Redux.createStore;
combineReducers = Redux.combineReducers;
ReactRedux = require('react-redux');
Provider = ReactRedux.Provider;
connect = ReactRedux.connect;



App = require('./blocks/App/App.jsx');
Header = require('./blocks/Header/Header.jsx');
Nav = require('./blocks/Nav/Nav.jsx');
Index = require('./blocks/Index/Index.jsx');
Catalog = require('./blocks/Catalog/Catalog.jsx');
CatalogCategory = require('./blocks/CatalogCategory/CatalogCategory.jsx');
CatalogProduct = require('./blocks/CatalogProduct/CatalogProduct.jsx');
Icon = require('./blocks/Icon/Icon.jsx');
MainBanners = require('./blocks/MainBanners/MainBanners.jsx');
MainBanner = require('./blocks/MainBanner/MainBanner.jsx');
Swiper = require('./blocks/Swiper/Swiper.jsx');
Decl = require('./blocks/Decl/Decl.jsx');

store = createStore(require('./reducer.jsx'));

ReactDOM.render((
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
), document.getElementById('app'));