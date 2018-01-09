const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./main.ts",
    output: {filename: "bundle.js", path: path.resolve(__dirname), library: "app"},
    module: {
        rules: [
            {test: /\.ts$/, use: ["ts-loader"]}
        ]
    },
    resolve: {extensions: [".ts", ".js"]},
    target: "web",
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require("./vendors.json")
        })
    ]
}