// create, delete, update, read

const { response } = require("express");
const Crud = require("../model/crudModel")

//Display
const crud_disp = (req,res) => {
    Crud.find(function (err,cruds){
        if(err){
            res.status(500).send("Internal Server Error");
        }
        else{
            res.json(cruds);
        }
    })
}

//Create
const crud_create_post = (req,res) => {
    let crud = new Crud(req.body)
    crud.save()
        .then((crud) => {
            res.send(crud)
        })
        .catch(function(err){
            res.status(422).send("Crud add failed");
    });
}

//Details by ID
const crud_details = (req,res) => {
    Crud.findById(req.params.id, function(err,crud){
        if (!crud){
            res.status(404).send("No info found")
        }
        else{
            res.json(crud)
        }
    })
}

//Delete

const crud_delete = (req,res) => {
    Crud.findById(req.params.id, function(err, crud){
        if (!crud){
            res.status(404).send("No info found")
        }
        else{
            Crud.findByIdAndRemove(req.params.id)
                .then(function(){
                    res.status(202).json("Crud Deleted")
                })
                .catch(function(){
                    res.status(400).send("Crud delete failed")
                })
        }
    });
}

//Update

const crud_update = (req,res) => {
    Crud.findByIdAndUpdate(req.params.id, req.body)
        .then(function(){
            res.json("Crud updated")
        })
        .catch(function(err){
            res.status(422).send("Crud update failed")
        })
}

const crud_test = async (req,res) => {
    const id = req.body.id
    const email = req.body.email
    const title = req.body.title
    const description = req.body.description

    const response = await Crud.create({
        "id":id,
        "email":email,
        "title":title,
        "description":description
    })
    res.send(response)
}

module.exports = {
    crud_create_post,
    crud_delete,
    crud_details,
    crud_update,
    crud_disp,
    crud_test
}

