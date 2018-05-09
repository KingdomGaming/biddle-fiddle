const path = require("path");
const webpack = require("webpack");

// Webpack Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                        plugins: [
                            "transform-async-to-generator",
                            "transform-class-properties",
                            "transform-exponentiation-operator",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: "body",
            minify: true,
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        // TODO: Fix this plugin
        // new ExtractTextPlugin({
        //     filename: "app.min.css",
        //     allChunks: true
        // })
    ],
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        watchContentBase: true,
        index: "index.html",
        hot: true,
        compress: true,
        historyApiFallback: true,
        port: 1337
    }
};