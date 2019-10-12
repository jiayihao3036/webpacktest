const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.config.js')
const webpackDevMiddelware = require('webpack-dev-middleware')
const complier = webpack(config)

let app = express();
app.use(webpackDevMiddelware(complier,{
    publicPath:config.output.publicPath
}))
app.listen(8081,function () {
    console.log('服务器运行了')
})
