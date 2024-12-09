const Animal = require("../models/Animal");

// Get All Animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json({ message: "List of all animals", animals });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve animals" });
  }
};

// Get Animal by ID
exports.getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: "Animal not found" });
    res.json({ message: `Animal details for ID: ${req.params.id}`, animal });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve animal" });
  }
};

// Create Animal
exports.createAnimal = async (req, res) => {
  const { name, breed, age, health, type } = req.body;
  try {
    const animal = new Animal({ name, breed, age, health, type });
    await animal.save();
    res.status(201).json({ message: "Animal profile created", animal });
  } catch (error) {
    res.status(500).json({ error: "Failed to create animal" });
  }
};

// Update Animal
exports.updateAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!animal) return res.status(404).json({ message: "Animal not found" });
    res.json({ message: `Animal profile updated for ID: ${req.params.id}`, animal });
  } catch (error) {
    res.status(500).json({ error: "Failed to update animal" });
  }
};

// Delete Animal
exports.deleteAnimal = async (req, res) => {
  try {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    if (!animal) return res.status(404).json({ message: "Animal not found" });
    res.json({ message: `Animal profile deleted for ID: ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete animal" });
  }
};
