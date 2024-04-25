const mongoose = require("mongoose")

async function connection(){
    const MONGO_URL = "mongodb+srv://satkar147:BHT33ZhdyKZJ59IL@crud.gwj3eqt.mongodb.net/"
    await mongoose.connect(MONGO_URL)
                    // .then((result) => console.log("Connection successful"))
                    // .catch((error) => console.log("Couldn't connect"))
}

// module.exports = () => {
//     const MONGO_URL = "mongodb+srv://satkar147:BHT33ZhdyKZJ59IL@crud.gwj3eqt.mongodb.net/"
//     const connection = mongoose.connect(MONGO_URL)
//                                 .then((result) => console.log("Connection successful"))
//                                 .catch((error) => console.log("Couldn't connect"))
// }

module.exports = connection;