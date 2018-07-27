const router = require('koa-router')()
const platformControl = require('../controllers/platformControl');

router.prefix('/api/platform')
    .post('/sendCode', platformControl.sendCode)//发送验证码
    .post('/getPortraits', platformControl.getPortraits);//获取系统头像组

module.exports = router
