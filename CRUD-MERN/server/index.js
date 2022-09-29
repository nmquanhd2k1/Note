
const express = require ("express");
const mongoose = require ("mongoose");
const cors = require('cors');
const app = express();

const personModel = require("./models/person");

app.use(express.json());
app.use(cord());

mongoose.connect(
    "mongodb+srv://123dzno1:123dzno1@quan.exafy15.mongodb.net/person?retryWrites=true&w=majority",
    {
    useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {

    const personName = req.body.personName;
    const email = req.body.email;
    const mobile = req.body.body;
    const city = req.body.city;


    const person = new personModel({ personName: personName, email: email, mobile: mobile, city: city});

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