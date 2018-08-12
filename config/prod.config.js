/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const WebpackBaseConfig = require('./common.config');


const ROOT = path.resolve(__dirname, '../');

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);

	return path.join(...[ROOT].concat(args));
}


class WebpackProdConfig extends WebpackBaseConfig {
	constructor() {
		super();

		this.config = {
			cache: false,
			devtool: 'cheap-module-source-map',
			entry: [
				'./index.jsx'
			],
			output: {
				path: root('dist'),
				publicPath: '/',
				filename: 'assets/app.js'
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': '"production"'
				}),
				new webpack.optimize.AggressiveMergingPlugin(),
				new CopyWebpackPlugin([
					{
						from: root('public/index.html'),
						to: root('dist/')
					},
					{
						from: root('public/fireballs-flame.svg'),
						to: root('dist/')
					},
					{
						from: root('public/coding-cat.png'),
						to: root('dist/')
					}
				])
			]
		};
	}
}

module.exports = WebpackProdConfig;
