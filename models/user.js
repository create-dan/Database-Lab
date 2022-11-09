const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    },
    prn:{
          type:String
    },
    branch:{
        type:String
    },
    email:{
        type:String
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel