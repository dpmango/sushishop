var isNode = typeof window === 'undefined'
self = (isNode) ? global : window

self.App = require('./blocks/App/App.jsx')
self.Header = require('./blocks/Header/Header.jsx')
self.Nav = require('./blocks/Nav/Nav.jsx')
self.Index = require('./blocks/Index/Index.jsx')
self.Catalog = require('./blocks/Catalog/Catalog.jsx')
self.CatalogCategory = require('./blocks/CatalogCategory/CatalogCategory.jsx')
self.Icon = require('./blocks/Icon/Icon.jsx')
self.MainBanners = require('./blocks/MainBanners/MainBanners.jsx')
self.MainBanner = require('./blocks/MainBanner/MainBanner.jsx')
self.Decl = require('./blocks/Decl/Decl.jsx')
self.MainCatalog = require('./blocks/MainCatalog/MainCatalog.jsx')
self.Pager = require('./blocks/Pager/Pager.jsx')
self.MainJournal = require('./blocks/MainJournal/MainJournal.jsx')
self.JournalItem = require('./blocks/JournalItem/JournalItem.jsx')
self.Footer = require('./blocks/Footer/Footer.jsx')
self.CatalogListCategory = require('./blocks/CatalogListCategory/CatalogListCategory.jsx')
self.Shops = require('./blocks/Shops/Shops.jsx')
self.MapShops = require('./blocks/MapShops/MapShops.jsx')
self.About= require('./blocks/About/About.jsx')
self.Actions= require('./blocks/Actions/Actions.jsx')
self.Product= require('./blocks/Product/Product.jsx')
self.ProductItem= require('./blocks/ProductItem/ProductItem.jsx')
self.Transition = require('./blocks/Transition/Transition.jsx')
self.NotFound = require('./blocks/NotFound/NotFound.jsx')
self.Job = require('./blocks/Job/Job.jsx')
self.Vacancy = require('./blocks/Vacancy/Vacancy.jsx')