var paths = require('./webpack.paths');
var path = require('path');

module.exports = [
    {
        test: /\.css$/,
        use: ['style', 'css'],
        include: paths.app
    }, 
    {
        test: /\.jsx?$/,
        use: ['babel'],
        include: paths.app
    }, 
    {
        test: /\.(png|jpg|svg|woff)$/,
        use: ['url?limit=40000'],
        include: paths.app
    }, 
    {
        test: /\.(eot|ttf)$/,
        use: ['file'],
        include: paths.app
    },
    {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.resolve('src'),
        exclude: /node_modules/
    }
]