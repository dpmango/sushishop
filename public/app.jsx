var self = (typeof window === 'undefined') ? GLOBAL : window
self.isNode = typeof window === 'undefined'


if (isNode) {
    URL_API = "http://sushi.endy.pro/api/"
} else {
    window.URL_API = "//sushi.endy.pro/api/"
    let initialState = JSON.parse(document.getElementById('store').innerHTML)
    window.store = createStore(require('./reducer.jsx'), initialState)
}


require('./blocks.jsx');

if (!isNode) {
    ReactDOM.render(require('./route.jsx'), document.getElementById("app"));
}