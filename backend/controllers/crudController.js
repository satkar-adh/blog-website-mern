// create, delete, update, read

const Crud = require("../model/crudModel")

//Display
const crud_disp = async (req,res) => {
    const data = await Crud.find()
    res.json(data);
}

//Create
const crud_create_post = async (req,res) => {
    const {email,title,description} = req.body
    let crud = await new Crud({email,title,description})
    crud.save()
        .then((data) => {
            res.send(data)
        })
        .catch(function(err){
            res.status(422).send("Crud add failed");
    });
}

//Details by ID
const crud_details = async (req,res) => {
    const crud = await Crud.findById(req.params.id)

    res.json(crud)
}

//Delete

const crud_delete = async (req, res) => {
    try {
        // Get the id from the URL parameters
        const crudId = req.params.id;

        // Delete the record
        await Crud.deleteOne({ id: crudId })
                                 .then(() => console.log("SUCCESSFULLY DELETED"))
                                 .catch((err) => console.log(error));

        // // Check if the record was found and deleted
        // if (result.deletedCount === 0) {
        //     return res.status(404).json({ error: "Record not found" });
        // }

        // Respond with a success message and the ID of the deleted record
        res.json({ success: "Record deleted", deletedId: crudId });
    } catch (error) {
        // Handle any errors that occur during the delete operation
        console.error("Error deleting record:", error);
        res.status(500).json({ error: "Failed to delete record" });
    }
};

  

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

const crud_search = async (req,res) => {
    try{
        let to_find = req.params.id
        const query = { title: { $regex: `${to_find}.+`, $options: 'i' } };
        const result = await Crud.find(query)
        res.json(result)
    }
    catch(err){
        console.log("ERROR")
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    crud_create_post,
    crud_delete,
    crud_details,
    crud_update,
    crud_disp,
    crud_test,
    crud_search
}

