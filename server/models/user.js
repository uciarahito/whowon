const mongoose = require('mongoose')
let Schema = mongoose.Schema

let userSchema = new Schema({
    uuid: String,
    name: String,
    username: String,
    password: String,
    role: {
        type: String,
        default: "user"
    },
    email: String,
    token: String
}) // userSchema

let User = mongoose.model('User', userSchema)
module.exports = User