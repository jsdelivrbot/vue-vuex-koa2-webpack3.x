var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({

    'id': String, //id
    'relation_id': String,//关联id
    'code': String,//验证码
    'create_date': String//创建时间
});

mongoose.model('vcode', schema);