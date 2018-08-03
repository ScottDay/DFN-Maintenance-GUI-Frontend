

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
                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery',
                    Popper: ['popper.js', 'default']
                })
            ]
        };

        this.config.module.rules = this.config.module.rules.concat([
            {
                test: /^.((?!cssmodule).)*\.(sass|scss)$/,
                loaders: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /^.((?!cssmodule).)*\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]);
    }
}

module.exports = WebpackDevConfig;
