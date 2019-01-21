let path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
    publicPath: '/'
	},
  module: {
    rules: [
      { 
        test: /\.(js|jsx)?$/, 
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/ 
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}, 
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  }
}