var BaseDao = require('./BaseDao.js'),
    models = require('../models/db.js'),
    messageModel = models.message;

var messageDao = function () { };
messageDao.prototype = new BaseDao(messageModel);

messageDao.getAllUnreadCount = function (query) {

    return new Promise((resolve, reject) => {

        messageModel.count(query, function (err, count) {
            resolve({
                "err": err,
                "data": count
            });
        });
    });

};

messageDao.addMessage = function (doc) {

    return new Promise((resolve, reject) => {

        messageModel.create(doc, function (err, model) {

            resolve({
                "err": err,
                "data": model
            });
        });
    });

};

messageDao.getRelationUser = function (query, fileds, opt) {

    return new Promise((resolve, reject) => {
        messageModel.aggregate([
            //条件
            {
                $match: query
            },
            //关联表
            {
                $lookup:
                {
                    from: "users",
                    localField: "to_uid",
                    foreignField: "_id",
                    as: "to_user"
                }
            },
            //关联表
            {
                $lookup:
                {
                    from: "users",
                    localField: "from_uid",
                    foreignField: "_id",
                    as: "from_user"
                }
            },
            //选择显示字段
            {
                $project: fileds
            },
            { $sort: opt.sort },
            { $skip: opt.skip },
            { $limit: opt.limit }
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

};

module.exports = messageDao;