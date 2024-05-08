require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const crudController = require("./controllers/crudController")
const PORT = 3000;
const app = express();

// middleware
// app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
// database connection
connection();


// routes
app.get("/crud", crudController.crud_disp);
app.post("/crud", crudController.crud_create_post);
app.post("/crud/test", crudController.crud_test);
app.get("/crud/:id", crudController.crud_details);
app.patch("/crud/:id", crudController.crud_update);
app.delete("/crud/:id", crudController.crud_delete);
app.get("/crud/search/:id",crudController.crud_search)
//app.use("/api/auth", authRoute);

// listening on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
