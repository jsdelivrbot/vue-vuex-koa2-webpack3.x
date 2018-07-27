var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({

    'to_uid': mongoose.Schema.ObjectId, //用户id-接收人
    'from_uid': mongoose.Schema.ObjectId,//用户id-发送人
    'type': Number,//0:单聊，1：群聊,2：站内信
    'status': Number,//0：未读，1：已读
    'content': String, //内容
    'create_date': String//创建时间
});

mongoose.model('message', schema);