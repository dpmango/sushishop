self = (IS_NODE) ? global : window

require('./libs.jsx')

if (IS_NODE) {
    URL_API = "http://sushi.endy.pro/api/"
} else {
    window.URL_API = "//sushi.endy.pro/api/"
    let initialState = JSON.parse(document.getElementById('store').innerHTML)
    window.store = createStore(require('./reducer.jsx'), initialState)
}

require('./blocks.jsx')

if (!IS_NODE) {
    ReactDOM.render(require('./route.jsx'), document.getElementById("app"));
}