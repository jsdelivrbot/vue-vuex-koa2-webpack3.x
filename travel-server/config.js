module.exports = {

    /**
     * 数据库连接地址
     * mongodb://[username:password@]host:port/database[?options]
     * @type {String}
     */
    connection: 'mongodb://172.20.17.125:27017/hulixiao',

    /**
     * token签名，用于加密，鉴权
     */
    token_autograph: 'hulixiao-token',

    /**
     * 静态资源前缀
     */
    staticPrefix: 'http://172.20.17.125:3000',

    /**
     * socket端口号
     */
    socketPort: 666,

    /**
     * sessionId在cookie中的key
     */
    sessionIdKey: "hulixiao"
}