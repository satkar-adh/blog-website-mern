const mongoose = require("mongoose")

module.exports = () => {
    const connection = mongoose.connect(3000)
                                .then((result) => console.log("Connection successful"))
                                .catch((error) => console.log("Couldn't connect"))
}