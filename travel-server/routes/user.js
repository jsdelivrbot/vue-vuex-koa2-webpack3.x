const router = require('koa-router')()
const userControl = require('../controllers/userControl');
const { authentication } = require('../middleware/token')

router.prefix('/api/user')
    .post('/sendCode', userControl.sendCode)//发送用户验证码
    .post('/login', userControl.login)//登录
    .post('/register', userControl.register)//注册
    .post('/getUserInfo', authentication, userControl.getUserInfo)//获取用户信息
    .post('/editUserInfo', authentication, userControl.editUserInfo);//更新用户信息

module.exports = router