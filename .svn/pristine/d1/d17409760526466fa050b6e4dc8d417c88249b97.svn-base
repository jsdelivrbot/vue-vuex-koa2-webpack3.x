const router = require('koa-router')();
const platform = require('./platform');
const userRouter = require('./user');
const contactsRouter = require('./contacts');
const messageRouter = require('./message');

// 装载路由
router.use(platform.routes(), platform.allowedMethods())
router.use(userRouter.routes(), userRouter.allowedMethods())
router.use(contactsRouter.routes(), contactsRouter.allowedMethods())
router.use(messageRouter.routes(), messageRouter.allowedMethods())

module.exports = router