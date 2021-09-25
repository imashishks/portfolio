const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/scripts/index.js',

    mode: "development",
    devServer: {
        static:{
            directory: path.resolve(__dirname, "dist"),
        }
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[hash][ext][query]"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset"
            },
              {
                test: /\.css$/,
                use:[{
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: ""
                    }
                }
                ,"css-loader"]
              }
        ]
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        }),
        
        new MiniCssExtractPlugin()
    ]
    
}