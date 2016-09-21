var express = require('express')
var vhost = require('vhost')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser())
app.use('/f', express.static('./build/f'))

require('node-jsx').install({extension: '.jsx'})
fs = require('graceful-fs')

setCache = function(name, data) {
    fs.writeFile('./cache/'+name+'.json', JSON.stringify(data))
}
getCache = function(name) {
    var path = './cache/'+name+'.json'
    if (fs.existsSync(path)) {
        return JSON.parse(fs.readFileSync(path))
    } else {
        return false
    }
}

cached = require('cached')
require('./public/libs.jsx')
require('./public/app.jsx')
routes = require('./public/route.jsx')

store = createStore(require('./public/reducer.jsx'))
// store.dispatch({
//     type: "GET_COMPANY"
// })
cookies = {}
app.get('*', (req, res) => {
    if ([ '/catalog', '/catalog/' ].indexOf(req.url) >= 0) {
        res.redirect('/catalog/rolls')
    }

    locationURL = req.url
    cookies = req.cookies
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        const html = ReactDOMServer.renderToString(React.createElement(
            Provider,
            { store: store },
            React.createElement(RouterContext, props))
        )
        res.send(renderPage(html, store.getState()))
    })
})
function renderPage(html, state) {
    let storeJSON = JSON.stringify(state)
    return `<!DOCTYPE html>
        <html>
        <head>
            <title>${state.meta.title}</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/f/favicons/apple-touch-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="/f/favicons/apple-touch-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="/f/favicons/apple-touch-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="/f/favicons/apple-touch-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="/f/favicons/apple-touch-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="/f/favicons/apple-touch-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="/f/favicons/apple-touch-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="/f/favicons/apple-touch-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="/f/favicons/apple-touch-icon-180x180.png">
            <link rel="icon" type="image/png" href="/f/favicons/favicon-32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="/f/favicons/android-chrome-192x192.png" sizes="192x192">
            <link rel="icon" type="image/png" href="/f/favicons/favicon-96x96.png" sizes="96x96">
            <link rel="icon" type="image/png" href="/f/favicons/favicon-16x16.png" sizes="16x16">
            <link rel="manifest" href="/f/favicons/manifest.json">
            <link rel="mask-icon" href="/f/favicons/safari-pinned-tab.svg" color="#f16722">
            <link rel="shortcut icon" href="/f/favicons/favicon.ico">
            <meta name="msapplication-TileColor" content="#f16722">
            <meta name="msapplication-TileImage" content="/f/favicons/mstile-144x144.png">
            <meta name="msapplication-config" content="/f/favicons/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <link rel="stylesheet" href="/f/style/style.css">
        </head>
        <body>
            <div id="app">${html}</div>
            <script id="store" type="application/json">${storeJSON}</script>
            <script src="//cdn.polyfill.io/v2/polyfill.min.js"></script>
            <script src="//unpkg.com/react@15.3.1/dist/react.js"></script>
            <script src="//unpkg.com/react-dom@15.3.1/dist/react-dom.js"></script>
            <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCO26nKWXJSUraUFRGGhQgNUQEyGiauFDU&libraries=geometry"></script>
            <script src="/f/script/libs.js"></script>
            <script src="/f/script/app.js"></script>
        </body>
        </html>`
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})