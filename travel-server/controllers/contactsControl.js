const contactsDao = require('../daos/contactsDao')
const messageDao = require('../daos/messageDao')
const mongodb = require('mongodb')

module.exports.getAllContacts = async (ctx, next) => {

    let _id = ctx.session.user._id;

    // 当前联系人用户列表
    let uResult = await contactsDao.getAllContacts(
        {
            "$or": [
                { "uid": { $eq: mongodb.ObjectId(_id) } },
                { "relation_uid": { $eq: mongodb.ObjectId(_id) } }
            ]
        },
        {
            "_id": 0, "relationship": 1, "last_touch_date": 1, "last_touch_content": 1,
            "user1._id": 1, "user1.nickname": 1, "user1.portrait_img_src": 1, "user1.email": 1,
            "user2._id": 1, "user2.nickname": 1, "user2.portrait_img_src": 1, "user2.email": 1
        }
    ).then(e => {
        return e;
    });

    let uData = uResult.data || [];

    for (let [index, item] of uData.entries()) {

        let u1 = item.user1,
            u2 = item.user2;

        let user = (function (u1, u2) {

            if (_id != u1[0]["_id"]) {
                return u1[0];
            } else if (_id != u2[0]["_id"]) {
                return u2[0];
            } else {
                return {};
            }

        })(u1, u2);

        item["user"] = user;

        delete item["user1"];
        delete item["user2"];

        // 未读消息
        let unreadMess = await messageDao.prototype.getByQuery(
            {
                "to_uid": { $eq: mongodb.ObjectId(_id) },
                "from_uid": { $eq: mongodb.ObjectId(user._id) },
                "status": 0
            }
        ).then(e => {
            return e.data;
        });

        item.unread = unreadMess.length;
    }

    ctx.body = { "err": uResult.err, "result": { "contacts": uData } }
}