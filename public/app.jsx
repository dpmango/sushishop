var isNode = typeof window === 'undefined';


if (isNode) {
    URL_API = "//sushi.endy.pro/api/"
} else {
    window.URL_API = "//sushi.endy.pro/api/"
    window.store = createStore(require('./reducer.jsx'))
}

require('./blocks.jsx');

if (!isNode) {
    ReactDOM.render(require('./route.jsx'), document.getElementById("app"));
}
