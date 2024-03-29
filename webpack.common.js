let path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist/build'),
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
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  }
}