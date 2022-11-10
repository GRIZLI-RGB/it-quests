const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
    mode,
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                exclude: /node_modules/,
                use: [
                    mode == "production" ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]",
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
            },
            { test: /\.txt$/, type: "asset/resource", exclude: /node_modules/, use: "raw-loader" },
        ],
    },
    entry: "./src/index.js",
    output: {
        clean: true,
        path: path.resolve(__dirname, "./build"),
        filename: "index.js",
        //publicPath: "https://grizli-rgb.github.io/it-quests",
        publicPath: "/",
    },
};
