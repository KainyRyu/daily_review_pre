'use strict'
const path = require('path');

module.exports = {
        entry: {
            main: ['./src/main.js']
        },
        output: {
            path: path.resolve(__dirname, './build'),
            firename: '[name].js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: path.resulve(__dirname, './src'),
                loaders: 'babel-loader'
            }]
        },
        plugins: [],
        devServer: {
            contentBase: './public',
            host: 'localhost',
            port: 8080
        }
}