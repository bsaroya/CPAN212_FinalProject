const express = require("express");
const {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animalController");

const router = express.Router();


router.get("/", getAllAnimals);
router.get("/:id", getAnimalById);
router.post("/", createAnimal);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

module.exports = router;
