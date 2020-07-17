const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const

const config = {
    entry: {
        vendor: ["@babel/polyfill", "react"],
        app: ["./src/Client/index.js"],
        css: ["./node_modules/antd/dist/antd.min.css", "./src/Client/css/Entry.css", "./src/Client/css/index.css", "./src/Client/css/HotSpots.css"],
        result: ["./src/Client/result.js"]

    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "./js/[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],

    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                parallel: 4,
                uglifyOptions: {
                    output: {
                        comments: false,
                        beautify: false,
                    },
                    compress: {
                        warnings: false
                    },
                },
                cache: true,
            }),]


    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({ // home页面
            title: 'index',
            filename: './index.html',
            template: './public/html/template.html',
            hash: true,
            chunks: ['vendors', 'app', 'css'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new HtmlWebpackPlugin({ // home页面
            title: 'result',
            filename: './result.html',
            template: './public/html/template.html',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            chunks: ['vendors', 'result', 'css'],
        })
    ]
};

module.exports = config;