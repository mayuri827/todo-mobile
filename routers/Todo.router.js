const router = require("express").Router()
const { model } = require("mongoose")
const todoController = require("./../controllers/Todo.controller")

router
    .get("/", todoController.getAlltodos)
    .post("/", todoController.addtodo)
    .put("/:id", todoController.updetetodo)
    .delete("/:x", todoController.deletetodo)

module.exports = router