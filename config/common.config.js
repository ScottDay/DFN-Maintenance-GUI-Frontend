'use strict';  // eslint-disable-line

/**
 * Webpack configuration base class
 */
const webpack = require('webpack');

const fs = require('fs');
const path = require('path');


const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {
	constructor() {
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
	 * Get the environment name
	 * @return {String} The current environment
	 */
	get env() {
		return 'dev';
	}

	/**
	 * Get the absolute path to src directory
	 * @return {String}
	 */
	get srcPathAbsolute() {
		return path.resolve('./src');
	}

	/**
	 * Get the absolute path to tests directory
	 * @return {String}
	 */
	get testPathAbsolute() {
		return path.resolve('./test');
	}

	/**
	 * Get the default settings
	 * @return {Object}
	 */
	get defaultSettings() {
		return {
			context: this.srcPathAbsolute,
			entry: ['babel-polyfill', './src/index.jsx'],
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
						test: /\.(js|jsx)$/,
						include: [].concat(
							this.includedPackages,
							[this.srcPathAbsolute]
						),
						loaders: [
							// Note: Moved this to .babelrc
							{ loader: 'babel-loader' }
						]
					}
				]
			},
			output: {
				path: path.resolve('./dist/assets'),
				filename: 'app.js',
				publicPath: './assets/'
			},
			resolve: {
				extensions: ['.js', '.jsx', '.json'],
				alias: {
					actions: `${this.srcPathAbsolute}/shared/actions`,
					components: `${this.srcPathAbsolute}/shared/components`,
					constants: `${this.srcPathAbsolute}/shared/constants`,
					services: `${this.srcPathAbsolute}/shared/services`,
					stores: `${this.srcPathAbsolute}/shared/stores`,
				}
			}
		};
	}
}

module.exports = WebpackBaseConfig;
