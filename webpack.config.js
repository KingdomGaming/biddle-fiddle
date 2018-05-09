// Project Modules
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

// Webpack Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// Directory Constants
const sourceDirectory = path.resolve("src");
const buildDirectory = path.resolve("dist");


module.exports = {
    mode: "development",
    entry: {
        app: path.join(sourceDirectory, "js", "index.js")
    },
    output: {
        filename: "[name].bundle.js",
        path: buildDirectory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["env", {
                                targets: {
                                    browsers: ["last 2 versions"]
                                }
                            }]
                        ],
                        plugins: [
                            "transform-async-to-generator",
                            "transform-class-properties",
                            "transform-exponentiation-operator",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: "inline",
                                plugins: () => [
                                    autoprefixer()
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([buildDirectory]),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(sourceDirectory, "index.html"),
            inject: "body",
            minify: true,
            cache: false,
            hash: true
        }),
        new UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: buildDirectory,
        watchContentBase: true,
        index: "index.html",
        hot: true,
        compress: true,
        historyApiFallback: true,
        port: 1337,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: "\u001b[32m"
            }
        }
    }
};