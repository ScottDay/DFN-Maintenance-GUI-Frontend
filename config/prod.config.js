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
            devtool: 'cheap-module-source-map', // cheap-source-map will not work with UglifyJsPlugin.
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
                        from: root('public/favicon.ico'),
                        to: root('dist/')
                    },
                    {
                        from: root('public/vendors'),
                        to: root('dist/vendors')
                    },
                    {
                        from: root('public/assets/images'),
                        to: root('dist/assets/images')
                    },
                    {
                        from: root('public/assets/images-demo'),
                        to: root('dist/assets/images-demo')
                    }
                ])
            ]
        };

        // Deactivate hot-reloading if we run dist build on the dev server
        this.config.devServer.hot = false;
    }
}

module.exports = WebpackProdConfig;
