const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    mode: "development",
    devServer: {
        static:{
            directory: path.resolve(__dirname, "dist"),
        }
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
                use: [
                       {
                         loader: "file-loader",
                         options: {
                           outputPath: 'images'
                         }
                       }
                     ]
              },
              {
                test: /\.css$/,
                use:[
                    {
                        loader: "css-loader",
                    },
                ]
              }
        ]
    },
    devtools: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
    ]
    
}