const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* eslint indent:0 */
module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.template.ejs', inject: 'body' }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // webpack doesn't resolve .jsx by default
    },
};
