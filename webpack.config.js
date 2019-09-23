const path = require('path')
module.exports = {
    entry:'./src/index.js',
    // devtool:'eval',
    output:{
        filename:'myWebpack.js',
        path: path.resolve(__dirname,'webpackbao')
    },
    module:{
        rules:[
            {
            test:/\.(png|jpg|gif)$/,
            use:[
                {
                    loader:'file-loader',
                    options:{
                        name:'[name]_[hash].[ext]',
                        outputPath:'images/'
                    }
                }
            ]
        },
        {
            test:/\.json$/,
            use:[
                {
                    loader:'json-loader',
                    options:{
                        name:'myjson.json'
                        // outputPath:'images/'
                    }
                }
            ]
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test:/\.(scss|sass)$/,
            use:['style-loader',
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
    mode:"production"
}