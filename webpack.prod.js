const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new CleanWebpackPlugin(['dist'], {exclude: 'favicon.ico'}),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
	mode: 'production'
});