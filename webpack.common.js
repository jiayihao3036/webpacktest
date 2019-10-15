const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
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
    plugins:[new HtmlWebpackPlugin({
       template:"src/index.html"
    }),
    new CleanWebpackPlugin(),
]
}