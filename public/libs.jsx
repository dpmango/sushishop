if (IS_NODE) {
    self.RouterContext = require('react-router').RouterContext
    self.match = require('react-router').match
    self.fetch = require('node-fetch')
    self.React = require('react')
    self.ReactDOMServer = require('react-dom/server')
}

if (!IS_NODE) {
    self.cookie = require('react-cookie')
    self.InfoBox = require('./blocks/Libs/InfoBox.jsx')
    self.RichMarker = require('./blocks/Libs/RichMarker.jsx')
    self.likely = require('ilyabirman-likely')
}

self.Router = require('react-router').Router
self.Route = require('react-router').Route
self.Link = require('react-router').Link
self.browserHistory = require('react-router').browserHistory
self.IndexRoute = require('react-router').IndexRoute
self.IndexRedirect = require('react-router').IndexRedirect
self.createStore = require('redux').createStore
self.combineReducers = require('redux').combineReducers
self.Provider = require('react-redux').Provider
self.connect = require('react-redux').connect
self.SwiperContainer = require('./blocks/Swiper/Swiper.jsx')
self.InputMasked = require('react-maskedinput')
self.axios = require('axios')
self.Scroll = require('./blocks/Libs/Scroll.jsx')
