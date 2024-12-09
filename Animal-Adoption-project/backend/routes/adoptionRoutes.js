const express = require("express");
const {
  submitApplication,
  getApplications,
} = require("../controllers/adoptionController");

const router = express.Router();


router.post("/", submitApplication);
router.get("/", getApplications);

module.exports = router;
