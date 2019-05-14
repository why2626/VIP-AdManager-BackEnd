const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var AdPosition = require('../adPosition/adPosition.model')
var AdPositionSchema = mongoose.model('AdPosition').schema
var Target = require('../targets/target.model')
var TargetSchema = mongoose.model('Target').schema

let AdSchema = new Schema({
    adName: {type: String, required: true, max: 100},
    isEndDateSet: {type: Boolean},
    startDate: {type: Date},
    endDate: {type: Date},
    appPoint: {type: String},
    adPosition : [AdPositionSchema],
    uploadedImage: {type: String},  
    linkType: {type: String},
    linkID: {type: String},
    targets: [TargetSchema],
    divices: {type: String},
    pricingType: {type: String},
    compativeType: {type: String},
    adPrice: {type: Number},
    dayLimitPrice: {type: Number},
    turnedOn: {type: Boolean},
    status: {type: String},
    exposure: {type: Number},
    clickCount: {type: Number},
    createTime: { type: Date, default: Date.now},
    userId: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('Ad', AdSchema);