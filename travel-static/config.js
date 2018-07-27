var path = require('path');

module.exports = {

    // socket连接地址配置
    socketUrl: 'http://172.20.17.125:666',

    // 静态资源前缀
    staticPrefix: 'http://172.20.17.125:3000',

    // 开发环境配置
    dev: {
        apiBaseURL: "http://172.20.17.125:3000/api/",
        outputPath: '/',
        outputPublicPath: '/',
        host: "172.20.17.125",
        port: 516
    },

    // 生产环境配置
    prod: {
        apiBaseURL: "http://hulixiao.cn/api/",
        outputPath: path.resolve(__dirname, './dist/public/'),
        outputPublicPath: '/'
    }
}
