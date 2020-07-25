const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const broserconfig = {
    entry: {
        vendor: ["react"],
        app: ["./src/Client/index.js"],
        result: ["./src/Client/result.js"]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "./js/[name].bundle.js"
    },
    // devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,

                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            [
                                "import",
                                {
                                    "libraryName": "antd",
                                    "style": true
                                }
                            ],
                        ]

                    }
                }
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })

            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }]
                })

            },
            // {
            //     test: /\.less$/,
            //     use: ["style-loader", { loader: 'css-loader' },
            //         { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }]
            // }
        ]
    }, optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'async',
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
            filename: './app.html',
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
            chunks: ['vendors', 'app'],
        }),
        new HtmlWebpackPlugin({
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
            chunks: ['vendors', 'result'],
        }),


        new ExtractTextPlugin({
            filename: "./css/[name].css"
        }),
        new StyleExtHtmlWebpackPlugin({
            chunks: ["result", "app"],
            position: 'head-bottom'
        }
        )

    ]
};




module.exports = broserconfig;