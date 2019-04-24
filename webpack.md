1、webpack-dev-server -g
1、webpack-dev-server -D

"build": "webpack --config webpack.config.build.js --progress -p" 


编译es6语法
es6-->js
使用babel-loader
npm install babel-loader babel-core -D
npm install babel-preset-env -D  安装预设

编译es6函数
方式1(在全局提供好es的实现，适用于开发插件，应用)
npm install babel-polyfill -S
在使用es6的模块文件中import
    import 'babel-prlyfill'
方式2(所用的es6的编译时，会提供方法转找，适用于开发项目，框架)
npm install babel-plugin-transform-runtime -D
npm install babel-runtime -S


使用webpack的插件：htmlwebpakplugin,将html文件当成模版，将输出的内容结合放在输出的文件夹中
npm install html-webpack-plugin -D


vue-->js
npm install vue-loader -D

css编译
使用css-loader  style-loader 
npm install css-loader style-loader -D


编译其它文件(png gif jpeg jpg ttf)
url-loader
npm install url-loader -D

