/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-14 10:17:34
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 10:48:21
 */
const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')// 在生成文件之前清空所有Plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");//在production模式下才有效
//相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname, _path)
//判断当前运行环境是开发模式还是生产模式
const nodeEnv = process.env.NODE_ENV || "development"
// let devtool = ''
// let optimization = {
//     minimizer: [
//         new CssMinimizerPlugin(),
//     ]
// }
// if (nodeEnv == "production") {

// } else {
//     // devtool = "inline-source-map"; // 上线去掉map文件
//     //如果dev模式也想压缩css就true
//     // optimization["minimiz"] = true
// }
module.exports = {
    entry: resolvePath('./src/index.js'),
    output: {
        path: resolvePath('./docs'),
        filename: '[name].bundle.js'
    },
    // devtool: devtool,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
            },
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env"
                        ]
                    }
                }
            }
        ]
    },
    // alias是配置全局的路径入口名称，只要涉及到下面配置的文件路径，可以直接用定义的单个字母表示整个路径
    resolve: {
        extensions: [".js", ".jsx", ".less", ".scss", ".css"],
        modules: [resolvePath("node_modules"), resolvePath("./src")],
        alias: {
            assets: path.join(__dirname, "/assets"),
            images: path.join(__dirname, "/assets/images"),
            src: path.join(__dirname, "/src"),
            utils: path.join(__dirname, "/src/utils"),
            config: path.join(__dirname, "/src/app/config"),
            components: path.join(__dirname, "/src/components"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Algorithm Learning',
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            // 定义全局变量
            "process.env": {
                NODE_ENV: JSON.stringify(nodeEnv)
            }
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    },
    devServer: {
        hot: true,
        host: "127.0.0.1",
        port: 9000,
        open: true,//跑起来打开浏览器
    }
}