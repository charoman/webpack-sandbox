const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {vendors: ["angular"]},
    output: {filename: "vendors.bundle.js", path: path.resolve(__dirname), library: "vendors"},
    resolve: {extensions: [".js"]},
    plugins: [
        new webpack.DllPlugin({
            name: "vendors",
            path: path.resolve(__dirname, "./vendors.json")
        })
    ]
}