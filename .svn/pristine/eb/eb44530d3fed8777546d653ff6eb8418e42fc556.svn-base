const router = require('koa-router')()
const messageControl = require('../controllers/messageControl');
const { authentication } = require('../middleware/token');

router.prefix('/api/message')
    .post('/getAllUnreadCount', authentication, messageControl.getAllUnreadCount)//获取所有未读消息数量
    .post('/getAllUnreadList', messageControl.getAllUnreadList)//获取所有未读消息
    .post('/updateMessageByMid', messageControl.updateMessageByMid)//根据消息ID更新消息状态
    .post('/updateUnreadMessage', messageControl.updateUnreadMessage)//更新所有未读消息为已读
    .post('/getHistoryMessage', messageControl.getHistoryMessage)//获取最近信息记录


module.exports = router