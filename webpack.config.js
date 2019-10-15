var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定末班文件路径
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置第三方loader
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=50000&name=[hash:8]-[name].[ext]'
            }, {
                test: /\.(ttf|svg|woff|woff2|eot)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}