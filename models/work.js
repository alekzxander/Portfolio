const mongoose = require('../config/database');

const workSchema = mongoose.Schema({
    title: String,
    picture: String,
    link: String
});

module.exports = mongoose.model('work', workSchema);