
const express = require ("express");
const mongoose = require ("mongoose");
const app = express();

const personModel = require("./models/person");

app.use(express.json());


mongoose.connect(
    "mongodb+srv://123dzno1:123dzno1@quan.exafy15.mongodb.net/person?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    }
);

app.get("/", async (req, res) => {
    const person = new personModel({ personName: "Nguyen", email: "nmquanhd@gmail.com", mobile: "00000000", city: "HCM"});

    try {
        await person.save();
        res.send("inserted data")
    } catch (error) {
        console.log(error);
    }
});

app.listen(3003, () => {
    console.log(`Server running on port 3003..`);
}); 