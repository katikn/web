const mongoose = require("mongoose");
 
const Schema = mongoose.Schema;
const anecdoteScheme = new Schema({
    title: String,
    description: String,
    showing: Boolean
});

module.exports = mongoose.model("Anecdote", anecdoteScheme);