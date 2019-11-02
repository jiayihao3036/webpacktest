const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const commonConfig = require('./webpack.common')
const proConfig = {
    mode:"production",
    // devtool:"cheap-module-source-map",
    module:{
        rules:[
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
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
        new OptimizeCssAssetsWebpackPlugin({})
    ],
    output:{
        filename:'[name].[contenthash].js',
        // path: path.resolve(__dirname,'dist'), 
    },
}
module.exports = merge(commonConfig,proConfig);