const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const channelSchema  = new Schema({
    id: String, 
    name: String,
    link: String,
    creator: String,
    category: String
})

module.exports = mongoose.model("channel", channelSchema);