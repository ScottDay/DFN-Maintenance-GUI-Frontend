'use strict';  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');


const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {
	constructor(props) {
		this.props = props;
		this._config = {};
	}

	/**
	 * Get the list of included packages
	 * @return {Array} List of included packages
	 */
	get includedPackages() {
		return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
	}

	/**
	 * Set the config data.
	 * This will always return a new config
	 * @param {Object} data Keys to assign
	 * @return {Object}
	 */
	set config(data) {
		this._config = Object.assign({}, this.defaultSettings, data);

		return this._config;
	}

	/**
	 * Get the global config
	 * @return {Object} config Final webpack config
	 */
	get config() {
		return this._config;
	}

	/**
	 * Get the absolute path to src directory
	 * @return {String}
	 */
	get srcPathAbsolute() {
		return path.resolve('./src');
	}

	/**
	 * Get the default settings
	 * @return {Object}
	 */
	get defaultSettings() {
		return {
			context: this.srcPathAbsolute,
			entry: ['./src/index.jsx'],
			module: {
				rules: [
					{
						enforce: 'pre',
						test: /\.(js|jsx)$/,
						include: this.srcPathAbsolute,
						loaders: 'babel-loader',
						query: {
							presets: ['env', 'react', 'stage-2'],
							plugins: ['transform-decorators-legacy']
						}
					},
					{
						enforce: 'pre',
						test: /\.(js|jsx)$/,
						include: this.srcPathAbsolute,
						loaders: 'eslint-loader',
						options: {
							quiet: false
						}
					},
					{
						test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
						loader: 'file-loader'
					},
					{
						test: /\.json$/,
						loader: 'json-loader'
					},
					{
						test: /\.scss$/,
						loaders: ['style-loader', 'css-loader', 'sass-loader']
					}
				]
			},
			output: {
				path: path.resolve('./dist/assets'),
				filename: 'app.js',
				publicPath: './assets/'
			},
			resolve: {
				extensions: ['.js', '.jsx', '.json', '.scss'],
				alias: {
					modules: `${this.srcPathAbsolute}/modules`,
					actions: `${this.srcPathAbsolute}/shared/actions`,
					components: `${this.srcPathAbsolute}/shared/components`,
					constants: `${this.srcPathAbsolute}/shared/constants`,
					services: `${this.srcPathAbsolute}/shared/services`,
					stores: `${this.srcPathAbsolute}/shared/stores`,
					styles: `${this.srcPathAbsolute}/shared/styles`,
					themes: `${this.srcPathAbsolute}/shared/themes`
				}
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.config': `${this.props.config}`,
					'process.env.auth': `${this.props.auth}`
				})
			]
		};
	}
}

module.exports = WebpackBaseConfig;
