const NODE_ENV = process.env.NODE_ENV || 'dev'
const webpack = require('webpack')

module.exports = {
    entry: {
        app: __dirname+'/public/app.jsx'
    },
    output: {
        path: __dirname+'/build/f/js',
        filename: '[name].js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: ((NODE_ENV == 'dev') ? 'cheap-inline-module-source-map' : false),
    performance : {
        hints : false
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            IS_NODE: JSON.stringify(false),
            SELF: JSON.stringify('window')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}