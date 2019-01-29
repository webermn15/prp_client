const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => merge(common, {
	plugins: [
		new CleanWebpackPlugin(['dist/build'], {exclude: 'favicon.ico'}),
		new HtmlWebpackPlugin({
			template: __dirname + '/dist/static/index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			'process.env.API_URL': JSON.stringify(`${env.API_URL}`)
		})
	],
	mode: 'production'
});