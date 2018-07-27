var BaseDao = require('./BaseDao.js'),
    models = require('../models/db.js'),
    portraitModel = models.portrait;

var portraitDao = function(){};
portraitDao.prototype = new BaseDao(portraitModel);

module.exports = portraitDao;