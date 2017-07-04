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
		port: 3000
	},
	module: {
		loaders: [
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
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'

            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
            	test: /\.(jpe?g|png|gif|svg)$/i,
			    loaders: [
			      'file?hash=sha512&digest=hex&name=[hash].[ext]',
			      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			    ]
            }
		]
	},
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        }),
		new ExtractTextPlugin('dist/content/styles.css', {
            allChunks: true
        })
    ]
}