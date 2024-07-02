
const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.getAlltodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch successfully", result })
})
exports.addtodo = asyncHandler(async (req, res) => {
    const result = await Todo.create(req.body)
    res.json({ message: "todo add successfully" })
})
exports.updetetodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo updete successfully" })
})
exports.deletetodo = asyncHandler(async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.x)
    res.json({ message: "todo delete successfully" })
})