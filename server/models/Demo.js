const mongoose =  require("mongoose");
const DemoSchema = new mongoose.Schema({
    demoName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true
    },
});

const Demo = mongoose.model("Demo", DemoSchema);
module.exports = Demo;
 