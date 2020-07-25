const path = require('path')

const serverconfig = {
    entry: "./src/Server/server.js",
    target: "node",
    output: {
        path: path.resolve(__dirname),
        filename: "index.js"
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
                        plugins: ["@babel/plugin-transform-runtime",
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
                loader: 'css-loader',
                options: {
                    onlyLocals: true,
                },
            },
            {
                test: /\.less$/,
                use: ["style-loader", {
                    loader: 'css-loader', options: {
                        onlyLocals: true,
                    },
                },
                    { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }]
            }
        ]
    },

}

module.exports = serverconfig;