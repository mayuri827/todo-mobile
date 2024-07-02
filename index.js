const express = require("express")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/todo", require("./routers/Todo.router"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resouce Not Found" })
})
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", (req, res) => {
    console.log("MONGO_CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})