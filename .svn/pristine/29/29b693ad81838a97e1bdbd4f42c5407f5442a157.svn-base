var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({

    'uid': mongoose.Schema.ObjectId, //我的id
    'relation_uid': mongoose.Schema.ObjectId,//关联用户id
    'last_touch_date': String,//最后联系时间
    'last_touch_content': String,//最后联系内容
    'relationship': Number//关系 1:我关注的人，2：我的粉丝，3：陌生人

});

mongoose.model('contacts', schema);