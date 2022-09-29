const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    personName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});


const person = mongoose.model("person", personSchema);
module.exports = person;