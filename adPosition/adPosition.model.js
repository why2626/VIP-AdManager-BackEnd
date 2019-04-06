const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdPositionSchema = new Schema({
    id: {type: Number},
    position: {type: String},
    picSize: {type: String},
    exposure: {type: String},
    clickRate: {type: String},
    clickCost: {type: String},
});

// Export the model
module.exports = mongoose.model('AdPosition', AdPositionSchema);