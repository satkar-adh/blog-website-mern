const mongoose = require("mongoose");

schema = new mongoose.Schema(
    {
        id:{
            type: Number,
            unique: true
        },
        email:{
            type: String,
            required: [true, "Email required"],
            trim: true,
            lowercase: true,
            unique: [true,"Email already exists"]
        },
        title:{
            type: String,
            required: [true,"Title can't be blank"]
        },
        description:{
            type: String,
            required: [true,"Description can't be blank"]
        }
    }
);

module.exports = mongoose.model("Crud",schema,"Cruds");