const path = require('path');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist/assets"),
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3000,
		headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
		"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		}
	},
	module: {
		loaders: [
			
		],
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: [ 'style-loader', 'css-loader']
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
		          presets: ['latest', 'stage-0', 'react']
		        }
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
            {
            	test: /\.(jpe?g|png|gif|svg)$/i,
			    loaders: [
			      'file?hash=sha512&digest=hex&name=[hash].[ext]',
			      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			    ]
            },
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader')
            }
		]
	},
    plugins: [
		new ExtractTextPlugin({
            filename: 'dist/content/styles.css',
			allChunks: true
        })
    ]
}