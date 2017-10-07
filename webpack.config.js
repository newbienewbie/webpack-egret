var webpack = require('webpack');
var path = require('path')
var paths = require('./webpack.paths')
var rules = require('./webpack.rules')


module.exports = {
	entry: {
		main: paths.app
	},
	resolve: {
		extensions: ['.jsx', '.js', '.ts']
	},
	output: {
		path: paths.build,
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		rules:rules 
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			BUILD_MODE: JSON.stringify('development')
		})
	]
};