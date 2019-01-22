const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => merge(common, {
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.API_URL': JSON.stringify(`${env.API_URL}`)
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		proxy: {
			'/api': 'http://localhost:3000',
			'secure': false
		}
	},
	mode: 'development'
});