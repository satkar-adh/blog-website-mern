const mongoose = require("mongoose");

schema = new mongoose.Schema(
    {
        email:{
            type: String,
        },
        title:{
            type: String,
        },
        description:{
            type: String,
        }
    }
);

const Crud = mongoose.model("Crud",schema)

module.exports = Crud;