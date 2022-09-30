const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const DemoModel  = require("./models/Demo.js");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://123dzno1:123dzno1@quan.exafy15.mongodb.net/demo?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {

    const demoName = req.body.demoName 
    const age = req.body.age
    const gender =  req.body.gender

    const demo = new DemoModel({ demoName: demoName, age: age, gender: gender});
    try {
        await demo.save();
        res.send("inserted data");
    } catch (error) {
        console.log(error);
    }
});


app.listen(3001, () => {
    console.log("Server running on port 3001 !!")
});

