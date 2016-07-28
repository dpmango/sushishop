var isNode = typeof self === 'undefined';
var self = (isNode) ? GLOBAL : self


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

self.createStore = require('redux').createStore
self.combineReducers = require('redux').combineReducers

self.Provider = require('react-redux').Provider
self.connect = require('react-redux').connect

self.cookie = require('react-cookie')
self.localForage = require('localforage')

self.Transition = require('./blocks/Transition/Transition.jsx')


if (isNode) {
    self.fetch = require('node-fetch')
}