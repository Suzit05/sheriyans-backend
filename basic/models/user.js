const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({   //schema is a fn which takes object
    username: String,
    email: String,
    password: String,
})

const userModel = mongoose.model("user", userSchema)  //"user"--model name && "userSchema"--schema


module.exports = userModel