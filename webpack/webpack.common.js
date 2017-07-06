var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	resolve: {
		modules: ['./node_modules']
	},
	module: {
		loaders: [
			{
				test: 	/\.js/,
				loader: 'babel-loader',
				exclude: /(node_modules)/
			},
			{
				test: 	/\.css/,
                loader: ["style-loader", "css-loader", "postcss-loader"]
			},
			{
				test: 	/\.jade/,
				loader: 'jade-loader'
			},
			{
				test: 	/\.ttf/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 		'TM Test',
			template: 	'src/html/index.jade'
		})
	],
	devServer: {
	    hot: true,
	    inline: true,
	    contentBase: path.resolve(__dirname, '../dist'),
	    publicPath: '/'
  	}
}