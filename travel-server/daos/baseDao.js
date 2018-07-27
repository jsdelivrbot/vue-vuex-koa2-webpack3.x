function BaseDao(Model) {

    this.model = Model;
}

BaseDao.prototype.create = function (doc) {
    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.create(doc, function (err, model) {
            resolve({
                "err": err,
                "data": model
            });
        });
    })
};

BaseDao.prototype.getById = function (id) {
    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.findOne({ _id: id }, function (err, model) {
            resolve({
                "err": err,
                "data": model
            });
        });
    });

};

BaseDao.prototype.countByQuery = function (query) {

    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.count(query, function (err, count) {
            resolve({
                "err": err,
                "data": count
            });
        });
    });
};

BaseDao.prototype.getByQuery = function (query, fileds, opt) {

    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.find(query, fileds, opt, function (err, model) {
            resolve({
                "err": err,
                "data": model
            });
        });
    });
};

BaseDao.prototype.getAll = function () {

    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.find({}, function (err, model) {
            resolve({
                "err": err,
                "data": model
            });
        });
    });
};

BaseDao.prototype.delete = function (query, callback) {

    this.model.remove(query, function (error, model) {
        return callback(error, null);
    });
};

BaseDao.prototype.update = function (conditions, update, optsion) {

    let _this = this;
    return new Promise((resolve, reject) => {
        _this.model.update(conditions, update, optsion, function (err, data) {
            resolve({
                "err": err,
                "data": data
            });
        });
    });
};

module.exports = BaseDao;