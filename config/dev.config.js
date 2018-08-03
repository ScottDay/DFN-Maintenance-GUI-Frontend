/**
 * Default dev server configuration.
 */
const webpack = require('webpack');

const WebpackBaseConfig = require('./common.config');


class WebpackDevConfig extends WebpackBaseConfig {
    constructor() {
		super();

        this.config = {
            devtool: 'source-map',
            entry: [
                'webpack-dev-server/client?http://0.0.0.0:3000/',
                'webpack/hot/only-dev-server',
                'react-hot-loader/patch',
                './index.jsx'
            ],
            plugins: [
                new webpack.optimize.ModuleConcatenationPlugin(),
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin()
            ]
        };
    }
}

module.exports = WebpackDevConfig;
