const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = {
    entry: {
        // vendor: ["@babel/polyfill", "react"],
        // app: ["./src/index.js"],
        // css: ["./node_modules/antd/dist/antd.css", "./src/Server/css/Entry.css", "./src/Server/css/index.css", "./src/Server/css/HotSpots.css"],
        // result:["./src/result.js"]
        vendor: ["@babel/polyfill", "react"],
        app: ["./src/Client/index.js"],
        css: ["./node_modules/antd/dist/antd.css", "./src/Client/css/Entry.css", "./src/Client/css/index.css", "./src/Client/css/HotSpots.css"],
        result: ["./src/Client/result.js"]

    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js"
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
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = config;