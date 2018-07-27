const vcodeDao = require('../daos/vcodeDao')
const portraitDao = require('../daos/portraitDao')
const mailServer = require('../server/mailServer')
const config = require('../config.js')

/**
 * 发送系统验证码
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports.sendCode = async (ctx, next) => {

    let body = ctx.request.body;
    let code = Math.floor(Math.random() * 10000);

    let result = await vcodeDao.prototype.create({ "relation_id": body.email, "code": code, "create_date": new Date() }).then(e => {
        return e;
    });

    let status = await mailServer.send({
        to: body.email, // 接受邮箱
        subject: '【狐狸笑】注册验证码', // 标题
        html: `您的验证码是：<span style="color:red;font-size:16px;">${code}</span>，有效时间：10分钟` // 内容
    }).then(e => {
        return e;
    });

    ctx.body = { "err": result.err, "result": { "status": status } }
}

/**
 * 获取系统头像组
 * @param {*} ctx 
 * @param {*} next 
 */
module.exports.getPortraits = async (ctx, next) => {

    let result = await portraitDao.prototype.getAll().then(e => {
        return e;
    });

    let data = result.data || [];

    for (let i in data) {
        let src = data[i]['portrait_img_src'];
        data[i]['portrait_img_src'] = config.staticPrefix + src;
    }

    ctx.body = { "err": result.err, "result": { "portraits": data } }
}