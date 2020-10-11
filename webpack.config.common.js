const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputPath = path.join(__dirname, "dist")
const port = process.env.PORT || 3000;

module.exports = {
	context: __dirname,
	entry: './src/App.jsx',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!sass-loader'
				}),
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css"),
	],
	devServer: {
		port,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
}