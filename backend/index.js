const express = require('express');
const cors = require('cors');
const connection = require("./db")
const routes = require("./routes/crudRoutes")

const app = express();
const PORT = 3000;

//connect to database
connection()

//middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json)
app.use(cors)
app.use((req,res,next) => {
  res.locals.path = req.path;
  next()
});

//routes
app.use("/api/crud",routes)

//listen
app.listen(PORT, ()=>{
  console.log(`Server listening to port ${PORT}`)
})