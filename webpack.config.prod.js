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

	entry: {
		index: './src/js/index.jsx',
		slideshow: './src/js/slideshow/swiper-js/source/jquery.slides.js'
	},

	output: {
	    path: path.resolve(__dirname, 'dist'),
	    publicPath: '/dist/',
	    filename: 'production.min.js' // Archivo de salida
	},

	resolve: {
	    extensions: ['.js', '.jsx']
	},

	module: {
	    rules: [
		    {
		        test: /\.scss$/,
		        use: [{
		                loader: 'style-loader' // creates style nodes from JS strings
		            }, {
		                loader: 'css-loader' // translates CSS into CommonJS
		            }, {
		                loader: 'sass-loader' // compiles Sass to CSS
		            }],
		        exclude: /node_modules/
		    },

		    {
		        test: /\.jsx$/,
		        exclude: /(node_modules|bower_components)/,
		        use: [{
		          	loader: 'babel-loader',
		          	options: {
		              	presets: ['react', 'env', 'es2015']
		          	}
		        }]
		    }
	    ]
	},

	devServer: {
		contentBase: path.join(__dirname, './'),
		port: 8080
	},

	devtool: 'inline-source-map',

	// optimization: {
	// 	minimizer: [
	// 	  // we specify a custom UglifyJsPlugin here to get source maps in production
	// 	  new UglifyJsPlugin({
	// 			cache: true,
	// 			parallel: true,
	// 			uglifyOptions: {
	// 				compress: false,
	// 				ecma: 6,
	// 				mangle: true
	// 			},
	// 			sourceMap: true
	// 	  })
	// 	]
	//   },

	plugins: [
		// new webpack.LoaderOptionsPlugin({
		//   debug: true
		// }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery',
			'Popper': ['popper.js', 'default']
		  })
	]
	// plugins: [

	// 	new webpack.DefinePlugin({
	// 	  'process.env.NODE_ENV': JSON.stringify('production')
	// 	})
	// 	new webpack.optimize.UglifyJsPlugin()
	// ]
};

module.exports = config;
