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
	constructor(props) {
		super(props);

		this.config = {
			cache: false,
			devtool: 'cheap-module-source-map',
			entry: [
				'./index.jsx'
			]
		};

		this.config.plugins = this.config.plugins.concat([
			new webpack.optimize.AggressiveMergingPlugin(),
			new CopyWebpackPlugin([
				{
					from: root('public/'),
					to: root('dist/')
				}
			])
		]);
	}
}

module.exports = WebpackProdConfig;
