const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/js/script.ts',
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    // target: "node",
    // node: {
    //   __dirname: false,
    // },
    module: {
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: "transform?brfs"
        //     }
        // ],
        rules: [
            {
                // test: /\.js$/,
                // use: "transform?brfs"
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
              },
                {
                  test: /\.node$/,
                  loader: "node-loader",
                },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [ path.resolve(__dirname, 'src/js') ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
              test: /\.(png|jpe?g|gif|txt)$/i,
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                publicPath: 'images',
                name: "[name].[ext]"
              },
            },
            {
                test: /\.(mp3)$/i,
                loader: 'file-loader',
                options: {
                  outputPath: 'audio',
                  publicPath: 'audio',
                  name: "[name].[ext]"
                },
            },
            {
                test: /\.(mp4)$/i,
                loader: 'file-loader',
                options: {
                  outputPath: 'video',
                  publicPath: 'video',
                  name: "[name].[ext]"
                },
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            fs: false
          }
    },
    plugins:[
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/images", to: "images" }
            ],
        }),
        new CompressionPlugin(),
    ]
}