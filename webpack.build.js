const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const proConfig = {
    mode:"production",
    devtool:"cheap-module-source-map",
}
module.exports = merge(commonConfig,proConfig);