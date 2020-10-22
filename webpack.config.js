'use strict';

const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/js/script.js',
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist/js/'),
	},

	// devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/env',
								{
									targets: {
										edge: '17',
                                        firefox: '60',
                                        chrome: '67',
                                        safari: '11.1',
                                        ie: '11',
									},
									useBuiltIns: 'usage',
									corejs: '2.6.11',
								},
							],
						],
					},
				},
			},
		],
	},
};
