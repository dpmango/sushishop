window.Router = require('react-router')
window.Route = Router.Route
window.Link = Router.Link
window.browserHistory = Router.browserHistory
window.IndexRoute = Router.IndexRoute
window.IndexRedirect = Router.IndexRedirect
window.Router = Router.Router

window.Redux = require('redux')
window.createStore = Redux.createStore
window.combineReducers = Redux.combineReducers

window.ReactRedux = require('react-redux')
window.Provider = ReactRedux.Provider
window.connect = ReactRedux.connect
    
window.cookie = require('react-cookie')


window.App = require('./blocks/App/App.jsx')
window.Header = require('./blocks/Header/Header.jsx')
window.Nav = require('./blocks/Nav/Nav.jsx')
window.Index = require('./blocks/Index/Index.jsx')
window.Catalog = require('./blocks/Catalog/Catalog.jsx')
window.CatalogCategory = require('./blocks/CatalogCategory/CatalogCategory.jsx')
window.CatalogProduct = require('./blocks/CatalogProduct/CatalogProduct.jsx')
window.Icon = require('./blocks/Icon/Icon.jsx')
window.MainBanners = require('./blocks/MainBanners/MainBanners.jsx')
window.MainBanner = require('./blocks/MainBanner/MainBanner.jsx')
window.Swiper = require('./blocks/Swiper/Swiper.jsx')
window.Decl = require('./blocks/Decl/Decl.jsx')
window.MainCatalog = require('./blocks/MainCatalog/MainCatalog.jsx')
window.Pager = require('./blocks/Pager/Pager.jsx')
window.MainJournal = require('./blocks/MainJournal/MainJournal.jsx')
window.JournalItem = require('./blocks/JournalItem/JournalItem.jsx')
window.Footer = require('./blocks/Footer/Footer.jsx')
window.CatalogListCategory = require('./blocks/CatalogListCategory/CatalogListCategory.jsx')
window.Shops = require('./blocks/Shops/Shops.jsx')


window.store = createStore(require('./reducer.jsx'))


window.localForage = require('localforage')