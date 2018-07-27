var path = require("path");
var webpack = require("webpack");
var merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var baseWebpackConfig = require("./webpack.base.config");
var config = require('../config');

module.exports = merge(baseWebpackConfig, {

    output: {
        path: config.prod.outputPath,
        publicPath: config.prod.outputPublicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader"]
                            }),
                            sass: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader", "sass-loader"]
                            }),
                            scss: ExtractTextPlugin.extract({
                                use: ["css-loader", "postcss-loader", "sass-loader"]
                            })
                        }
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'stylus-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin({
            allChunks: true,//从所有附加块提取过
            filename: "css/style.[contenthash:8].css?"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",//相对于Webpack配置项output.path
            template: "index.tpl.html"//相对于Webpack编译时的上下文目录，一般就是项目根目录
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })
    ]
});