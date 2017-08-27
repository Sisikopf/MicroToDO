const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};