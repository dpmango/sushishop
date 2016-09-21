var isNode = typeof window === 'undefined'
var self = (isNode) ? global : window


if (isNode) {
    self.React = require('react')
    self.ReactDOMServer = require('react-dom/server')
}

self.Router = require('react-router').Router
self.Route = require('react-router').Route
self.Link = require('react-router').Link
self.browserHistory = require('react-router').browserHistory
self.IndexRoute = require('react-router').IndexRoute
self.IndexRedirect = require('react-router').IndexRedirect
if (isNode) {
    self.RouterContext = require('react-router').RouterContext
    self.match = require('react-router').match
}
if (!isNode) {
    self.SwiperLib = require('swiper')
}

self.createStore = require('redux').createStore
self.combineReducers = require('redux').combineReducers

self.Provider = require('react-redux').Provider
self.connect = require('react-redux').connect

if (!isNode) {
    self.cookie = require('react-cookie')
    self.localForage = require('localforage')

    self.InfoBox = require('./blocks/Libs/InfoBox.jsx')
    self.RichMarker = require('./blocks/Libs/RichMarker.jsx')
}

self.Swiper = require('./blocks/Swiper/Swiper.jsx')

self.InputMasked = require('react-maskedinput')

self.axios = require('axios')

self.Scroll = require('react-scroll').animateScroll


if (isNode) {
    self.fetch = require('node-fetch')
}