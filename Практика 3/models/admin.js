const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
const adminScheme = new Schema({
    name: String,
    password: String
});

module.exports = mongoose.model("Admin", adminScheme);