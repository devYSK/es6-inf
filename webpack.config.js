var path = require('path');

module.exports = {
	mode : 'development',
	entry : './src/index.js',
	
	output : {
		filename : "bundle.js",
		path : path.resolve(__dirname, 'dist'),
		publicPath:'/dist'
	},
	module : {
		rules : [{
			test : /\.js$/,
			// include : path.resolve(__dirname, 'src'),
			exclude : /(node_modules)/,
			use: {
				loader : 'babel-loader',
				options : {
					presets:['@babel/preset-env']
				
				}
			}


			// use : {
			// 	loader : 'babel-loader',
			// 	options : {
			// 		presets : //['@babel/preset-env']
			// 		[ 
			// 		['env', {
			// 			'targets' : {
			// 				'browsers' : ["last 2 versions"]		
			// 			}
					
			// 		}]
			// 	]
			// 	},
			// }
		}]
	}

}
