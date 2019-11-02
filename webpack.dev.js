
const commonConfig = require('./webpack.common')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
let devConfig = {
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,
        hotOnly:true
    },
    plugins:[
    new webpack.HotModuleReplacementPlugin(),new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new OptimizeCssAssetsWebpackPlugin({})
],
    mode:"development",
    // devtool:"cheap-module-eval-source-map",
    module:{
        rules:[
            // {
            //     test:/\.css$/,
            //     use:['style-loader','css-loader']
            // },
            // {
            //     test:/\.(scss|sass)$/,
            //     use:['style-loader',
            //     { 
            //         loader:'css-loader',
            //         options:{
            //             importLoaders:2
            //         }
            //     },
            //     'sass-loader',
            //     'postcss-loader']
            // }
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(scss|sass)$/,
                use:[MiniCssExtractPlugin.loader,
                { 
                    loader:'css-loader',
                    options:{
                        importLoaders:2
                    }
                },
                'sass-loader',
                'postcss-loader']
            }
        ]
    },
    optimization:{
         splitChunks:{
            chunks:'all',
            cacheGroups: {
                common: {
                  name: 'common',
                  chunks: 'initial',
                  priority: 2,
                  minChunks: 2,
                },
              }
        }
    }
}
module.exports = merge(commonConfig,devConfig)