const mongoose = require("mongoose")

mongoose.connect("")//mongodb url

//create a mongoose Schema and model object

const UserSchema = new mongoose.Schema({
        email: String,
        password: String
})

const TodoSchema = new mongoose.Schema({
        title: String,
        description: String,
        UserId: String
})

const UserModel = mongoose.model("users",UserSchema)
const todoModel = mongoose.model("Todo",TodoSchema)

module.exports({
        UserModel: UserModel,
        todoModel:todoModel
})