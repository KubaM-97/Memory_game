const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: './src/js/script.ts',
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [ path.resolve(__dirname, 'src/js') ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins:[
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/images", to: "img" }
            ],
        }),
    ]
}