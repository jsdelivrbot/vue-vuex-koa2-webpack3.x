var BaseDao = require('./BaseDao.js'),
    models = require('../models/db.js'),
    contactsModel = models.contacts;

var contactsDao = function () { };
contactsDao.prototype = new BaseDao(contactsModel);

contactsDao.getAllContacts = function (query, fileds) {

    return new Promise((resolve, reject) => {
        contactsModel.aggregate([
            //条件
            {
                $match: query
            },
            //关联表
            {
                $lookup:
                {
                    from: "users",
                    localField: "uid",
                    foreignField: "_id",
                    as: "user1"
                }
            },
            //关联表
            {
                $lookup:
                {
                    from: "users",
                    localField: "relation_uid",
                    foreignField: "_id",
                    as: "user2"
                }
            },
            //选择显示字段
            {
                $project: fileds
            }
        ]).exec(function (err, e) {
            if (err) {
                reject({
                    "err": err,
                    "data": e
                });
            } else {
                resolve({
                    "err": err,
                    "data": e
                });
            }
        })
    });

}

module.exports = contactsDao;