const router = require('koa-router')()
const contactsControl = require('../controllers/contactsControl');

router.prefix('/api/contacts')
    .post('/getAllContacts', contactsControl.getAllContacts)//发送用户验证码

module.exports = router