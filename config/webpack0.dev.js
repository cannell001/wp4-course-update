const path = require("path")

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    mode: "development",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist/"),
        publicPath: "/"
    },
    devServer: {
        inline: true,
        overlay: true,
        contentBase: "dist",
        port: 1234
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: "babel-loader"
                }
              ]
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../"
                        }
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options:{
                            name: "images/[name]-[hash:8].[ext]"

                        }
                    }
                ]
            }

        ]
        }
    }
