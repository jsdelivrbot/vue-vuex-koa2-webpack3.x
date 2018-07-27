const http = require('http');
const util = require('util');

module.exports.getIpInfo = function (ip, callback) {

    let sina_server = 'http://ip.taobao.com/service/getIpInfo.php?ip=';
    let url = sina_server + ip;

    http.get(url, function (res) {

        var code = res.statusCode;
        if (code == 200) {
            res.on('data', function (data) {
                try {
                    callback(null, JSON.parse(data));
                } catch (err) {
                    callback(err);
                }
            });
        } else {
            callback({ code: code });
        }
    }).on('error', function (e) { callback(e); });
};