/**
 * webpack base config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageConfig = require('./package.json');

const SRC_PATH = path.resolve('./src');
const FRONT_END_PATH = path.join(SRC_PATH, 'frontEnd');
const BUILD_FRONT_END_PATH = path.resolve('./build/frontEnd');

module.exports = {
    context: FRONT_END_PATH,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./index.js']
    },
    output: {
        path: BUILD_FRONT_END_PATH,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                            {
                                limit: 8192,
                                name: 'images/[name].[ext]'
                            }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:
                            {
                                limit: 8192,
                                mimetype: 'application/font-woff',
                                name: 'fonts/[name].[ext]'
                            }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:
                            {
                                limit: 8192,
                                mimetype: 'application/font-woff',
                                name: 'fonts/[name].[ext]'
                            }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: packageConfig.name,
            filename: path.join(BUILD_FRONT_END_PATH, './index.html'),
            hash: false
        })
    ]
};
