const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let pathsToClean = [
    'dist',
]

module.exports = {
    entry:{
        'index':'./src/js/index.js', 
        'common':'./src/js/common.js', 
        'product':'./src/js/product.js', 
        'join':'./src/js/join.js'
    },
    //输出文件配置
    output:{                
        path: path.resolve(__dirname+'/dist'),
        filename:'js/[name].[hash:8].js',
        publicPath: './'
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: {
                collapseWhitespace: true,  //删除空白符与换行符
                removeComments:true,       //移除HTML中的注释
                minifyCSS:true, //压缩css
                minifyJS:true, //压缩js
                minifyURLs:true 
            },
            hash: true,
            chunks: ['common','index']
        }),
        new HtmlWebpackPlugin({
            template: './src/common/nav.html',
            filename: './common/nav.html',
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/common/footer.html',
            filename: './common/footer.html',
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/product.html',
            filename: './product.html',
            chunks: ['common','product'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/story.html',
            filename: './story.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/life.html',
            filename: './life.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/worth.html',
            filename: './worth.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/find.html',
            filename: './find.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/technology.html',
            filename: './technology.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/formula.html',
            filename: './formula.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/quality.html',
            filename: './quality.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/develop.html',
            filename: './develop.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: './contact.html',
            chunks: ['common'],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/join.html',
            filename: './join.html',
            chunks: ['common',"join"],
            minify: {
                collapseWhitespace: true,  
                removeComments:true,       
                minifyCSS:true, 
                minifyJS:true, 
                minifyURLs:true 
            },
            hash: true
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
                        // options: {
                        //     publicPath: 'dist/'
                        // },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            //编译url的配置
            {
                test: /\.(png|gif|jpeg|jpg|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit:10000,
                    name:'images/[name].[ext]',
                }
            },
            {
                test: /\.(woff2?|eot|ttf|svg|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    mode:'production', // 可以更改模式
}