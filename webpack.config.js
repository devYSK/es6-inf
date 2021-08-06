var path = require('path');

moudle.exports = {
	entry : './src/index.js',
	output : {
		filename : "bundle.js",
		path : path.resolve(__dirname, 'dist')
	},
	module : {
		rules : [{

		}]
	}

}
