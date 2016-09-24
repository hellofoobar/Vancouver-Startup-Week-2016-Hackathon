var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'source-map',
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
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