const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    personName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
});


const person = mongoose.model("person", personSchema);
module.exports = person;