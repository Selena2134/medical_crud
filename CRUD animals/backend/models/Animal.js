const mongoose = require('mongoose');

const Animal = mongoose.model("Animal", {
    name: String,
    birthdate: Date,
    type: String,
    breed: String
});

module.exports = Animal;