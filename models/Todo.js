const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: { type: String, require: true },
    desc: { type: String, require: true },
    priority: { type: Number, require: true }

})
module.exports = mongoose.model("todo", todoSchema)