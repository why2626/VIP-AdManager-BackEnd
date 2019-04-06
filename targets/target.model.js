const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TargetSchema = new Schema({
    targetName: {type: String, required: true, max: 100},
    platform: {type: String, required: true},
    gender: {type: String},
    age: {type: String},
    category: [], //一二级品类
    brand : [], //品牌名称
    peopleEstimate: {type: Number},  //人群数量预估,
    createTime: { type: Date, default: Date.now},
    userBtn_1: {type: String},
    userBtn_2: {type: String},
    userBtn_3: {type: String},
    userBtn_4: {type: String},
    userBtn_5: {type: String},
    branBtn_1: {type: String},
    branBtn_2: {type: String},
    branBtn_3: {type: String},
    branBtn_4: {type: String},
    branBtn_5: {type: String},
    categBtn_1: {type: String},
    categBtn_2: {type: String},
    categBtn_3: {type: String},
    categBtn_4: {type: String},
    categBtn_5: {type: String},
    userId: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Target', TargetSchema);