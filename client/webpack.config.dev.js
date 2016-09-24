var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './index.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
    },
    module: {    
        preLoaders: [

        ],
        loaders: [
            // js
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            { 
                test: /\.json$/, 
                exclude: /node_modules/, 
                loader: 'json'
            },
            // css
            {
                test: /\.(css|less)$/,
                loader: 'style!css!less'
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url?limit=10000!img?progressive=true' 
            }
        ]
    }
};

module.exports = config;