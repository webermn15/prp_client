const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true
	},
	mode: 'development'
});