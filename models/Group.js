const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const group = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});