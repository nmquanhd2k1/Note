const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const DemoModel = require("./models/Demo.js");

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
    const gender = req.body.gender

    const demo = new DemoModel({ demoName: demoName, age: age, gender: gender });
    try {
        await demo.save();
        res.send("inserted data");
    } catch (error) {
        console.log(error);
    }
});


app.get("/read", async (req, res) => {
    DemoModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }

        res.send(result)
    })
});


app.put("/update", async (req, res) => {

    const newDemoName = req.body.newDemoName;
    const id = req.body.id;

    try {
        await DemoModel.findById(id, (err, updateDemo) => {
            updatedDemo.demoName = newDemoName;
            updatedDemo.save();
            res.send("update");
        })
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await DemoModel.findByIdAndRemove(id).exec();
    res.send("deleted");
    
})

app.listen(3001, () => {
    console.log("Server running on port 3001 !!")
});

