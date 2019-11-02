const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:{
        app: './src/index.js',
        header:'./src/header'
    },
    output:{
        filename:'[name].index.js',
        path: path.resolve(__dirname,'dist'),
        
    },
    module:{
        rules:[
            // {
            //     test: /\.(html)$/,
            //     use: {
            //       loader: 'html-loader',
            //       options: {
            //         //  minimize:true,
            //          attrs: [':data-src']
            //       }
            //     }
            // },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:[
                                ['@babel/preset-env',{
                                     useBuiltIns:'usage',
                                     corejs:2
                                }]
                            ]
                        }
                    }
                ]
            },
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
        },
        
    ]     
    },
    optimization:{
        usedExports:true
    },
    plugins:[new HtmlWebpackPlugin({
       template:"src/index.html",
       minify:{
           collapseWhitespace: true
       }
    //    inject:false
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
        _:'lodash'
    }),
]
}