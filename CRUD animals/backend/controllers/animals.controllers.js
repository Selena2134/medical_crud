const Animal = require('../models/Animal');

exports.index = async(req, res) => {
    const animals = await Animal.find();
    res.json(animals);
};

exports.show = async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    res.json(animal);
};

exports.store = async(req, res) => {
    const animal = await Animal.create(req.body);
    res.json(animal);
};

exports.update = async(req, res) => {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(animal);
};

exports.delete = async(req, res) => {
    await Animal.findByIdAndDelete(req.params.id);
    res.send('Deleted successfully');
};