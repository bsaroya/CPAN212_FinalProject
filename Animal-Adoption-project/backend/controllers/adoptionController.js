const Application = require("../models/Application");

// Submit Application
exports.submitApplication = async (req, res) => {
  const { userId, animalId, applicationDetails } = req.body;
  try {
    const application = new Application({ userId, animalId, applicationDetails });
    await application.save();
    res.status(201).json({ message: "Adoption application submitted", application });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit application" });
  }
};

// Get All Applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json({ message: "List of adoption applications", applications });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve applications" });
  }
};
