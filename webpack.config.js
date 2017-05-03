/**
 * Created by mac on 2017/5/1.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',
    entry:{
        app:path.resolve(__dirname, './app/app')
    },
    output:{
        path:path.resolve(__dirname, './build'),
        filename:"[name].js",
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader?sass-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new webpack.optimize.CommonsChunkPlugin('common'),
        new ExtractTextPlugin({
            filename:'style.css',
            allChunks: true,
            disable: false
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3000
    }
};