const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : './src/index.js',
    mode : 'development',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname, 'build')
    },
    devServer : {
        open : true,
        static : path.resolve(__dirname, 'build')
    },
    plugins : [
        new HtmlWebpackPlugin({
            inject : 'body',
            template : 'public/index.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader']
            }
        ]
    }
};