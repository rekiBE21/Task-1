const { Timestamp } = require("bson");
const { timeStamp } = require("console");
const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            trim:true,
            minlength:5
        },
        // username: String, // on source code
        // email: String,
        // password: String,
        roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
        ]
    }, {timestamps:true})
);

module.exports = User;