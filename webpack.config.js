const path = require("path")

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: './src/js/script.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [ path.resolve(__dirname, 'src/js') ]
            }
        ]
    },
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}