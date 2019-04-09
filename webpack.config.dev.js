const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
    entry:{
        'index':'./src/js/index.js', 
        'common':'./src/js/common.js', 
        'product':'./src/js/product.js', 
        'join':'./src/js/join.js'
    },
    output:{               
        path: __dirname,
        filename:'dist/[name].[hash:8].js'
    }, 
    //配置webpack插件
    plugins: [
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            //模板文件
            template: './src/index.html',
            //输出文件名字
            filename: './src/index.html',
            hash: true,
            chunks: ['common','index']
        }),
        new HtmlWebpackPlugin({
            template: './src/product.html',
            filename: './src/product.html',
            hash: true,
            chunks: ['common','product']
        }),
        new HtmlWebpackPlugin({
            template: './src/story.html',
            filename: './src/story.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/life.html',
            filename: './src/life.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: './src/contact.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/join.html',
            filename: './src/join.html',
            hash: true,
            chunks: ['common',"join"]
        }),
        new HtmlWebpackPlugin({
            template: './src/worth.html',
            filename: './src/worth.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/develop.html',
            filename: './src/develop.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/find.html',
            filename: './src/find.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/technology.html',
            filename: './src/technology.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/formula.html',
            filename: './src/formula.html',
            hash: true,
            chunks: ['common']
        }),
        new HtmlWebpackPlugin({
            template: './src/quality.html',
            filename: './src/quality.html',
            hash: true,
            chunks: ['common']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    //模块配置
    module: {
        //配置文件编译的规则
        rules: [
            //编译es6的配置
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            //编译css的配置
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            //编译url的配置
            {
                test: /\.(png|gif|jpeg|jpg|ttf)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader'
            }
        ]
    },
    mode:'development', // 可以更改模式

    devServer: { 
        host: '192.168.1.144', 
        port: 9090,
        // autoOpenBrowser: true
//         proxy: { 
//             '/v2/*': { 
//                 changeOrigin: true, 
//                 target: 'https://api.douban.com/', 
//             }
//         }
    }
        
}
