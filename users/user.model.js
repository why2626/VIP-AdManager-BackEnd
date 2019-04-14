const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    companyName: { type: String, required: true },
    username: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    //_id: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);