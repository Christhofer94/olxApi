const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    idUser: String,
    State: String,
    Category: String,
    Images: [Object],
    dateCreated: Date,
    title: String,
    price: number,
    priceNegotiable: Boolean,
    description: String,
    views: Number,
    status: String,
});

const modelName = 'Ad';

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName];
} else {
  module.exports = mongoose.model(modelName, modelSchema);
}