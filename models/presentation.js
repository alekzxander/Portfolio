const mongoose = require('../config/database');

const presentationSchema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('presentation', presentationSchema);