const path = require('path');
const webpack = require('webpack');

// ...
// require('rollup-plugin-replace')({
// 'process.env.NODE_ENV': JSON.stringify('production')
// });
// require('rollup-plugin-commonjs')();
// require('rollup-plugin-uglify')();
// ...
// 

const config = {

	entry: './src/js/index.jsx',

	output: {
	    path: path.resolve(__dirname, 'dist'),
	    publicPath: '/dist/',
	    filename: 'bundle.min.js' //Archivo de salida
	},

	resolve: {
	    extensions: ['.js', '.jsx']
	},

	module: {
	    rules: [
		    {
		        test: /\.scss$/,
		        use: [{
		                loader: "style-loader" // creates style nodes from JS strings
		            }, {
		                loader: "css-loader" // translates CSS into CommonJS
		            }, {
		                loader: "sass-loader" // compiles Sass to CSS
		            }],
		        exclude: /node_modules/
		    },

		    {
		        test: /\.jsx$/,
		        exclude: /(node_modules|bower_components)/,
		        use: [{
		          	loader:'babel-loader',
		          	options: {
		              	presets: ['react', 'env', 'es2015']
		          	}
		        }]
		    }
	    ]
	},

	devServer: {
		host: '0.0.0.0',
		port: 3000,
		inline: true
	},

	devtool: 'source-map',

	plugins: [
		new webpack.LoaderOptionsPlugin({
		  debug: true
		})
	  ]
	// plugins: [

	// 	new webpack.DefinePlugin({
	// 	  'process.env.NODE_ENV': JSON.stringify('production')
	// 	}),
	// 	new webpack.optimize.UglifyJsPlugin()
	// ]

}

module.exports = config;