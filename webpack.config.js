const path = require('path')
module.exports = {
    entry:'./src/index.js',
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
                    loader:'url-loader',
                    options:{
                        name:'myjpg.jpg'
                        // outputPath:'images/'
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
            use:['style-loader','css-loader','sass-loader','postcss-loader']
        }
    ]     
    },
    mode:"production"
}