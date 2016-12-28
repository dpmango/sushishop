self = (IS_NODE) ? global : window

if (!IS_NODE) {
    NodeList.prototype.map = HTMLCollection.prototype.map = Array.prototype.map
    NodeList.prototype.filter = HTMLCollection.prototype.filter = Array.prototype.filter
    NodeList.prototype.indexOf = HTMLCollection.prototype.indexOf = Array.prototype.indexOf
}

require('./libs.jsx')

if (IS_NODE) {
    URL_API = "http://sushi.endy.pro/api/"
} else {
    window.URL_API = "//sushi.endy.pro/api/"
    let initialState = JSON.parse(document.getElementById('store').innerHTML)
    window.store = createStore(require('./reducer.jsx'), initialState)
    if (store.getState().meta.noResponsive) {
        document.querySelector('html').classList.add('no-responsive')
    } else {
        document.querySelector('html').classList.remove('no-responsive')
    }
}

require('./blocks.jsx')

if (!IS_NODE) {
    ReactDOM.render(require('./route.jsx'), document.getElementById("app"));
}