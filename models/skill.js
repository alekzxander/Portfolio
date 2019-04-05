const mongoose = require('../config/database');

const languages = mongoose.Schema({
    name: Array
});
const skillSchema = mongoose.Schema({
    title: String,
    content: String,
    languages: Array,
});

module.exports = mongoose.model('skill', skillSchema);
