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
        //提公用js到common.js文件中
        new webpack.optimize.CommonsChunkPlugin('common'),
        new ExtractTextPlugin({
            filename:'style.css',
            allChunks: true,
            disable: false
        })
    ],
    devServer: {
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 3000//设置默认监听端口，如果省略，默认为"8080"
    }
};