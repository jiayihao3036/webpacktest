
const commonConfig = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
let devConfig = {
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,
        hotOnly:true
    },
    plugins:[
    new webpack.HotModuleReplacementPlugin()
],
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    optimization:{
         usedExports:true
    }
}
module.exports = merge(commonConfig,devConfig)