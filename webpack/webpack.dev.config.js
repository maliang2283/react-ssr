const path = require('path');

//定一个通用的路径转换方法
const resolvePath = (pathStr) => path.resolve(__dirname, pathStr);
console.log(resolvePath('../src/client/app/index.js'))
module.exports = {
    mode: 'development',
    entry: resolvePath('../src/client/app/index.js'),//入口文件
    output: {
        filename: 'index.js', //设置打包后的文件名
        path: resolvePath('../dist/static')//设置构建结果的输出目录
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}