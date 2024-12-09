// controllers/authController.js

exports.registerUser = (req, res) => {
  const { name, email, password, role } = req.body;
  res.status(201).json({ message: "User registered successfully", user: { name, email, role } });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "Login successful", token: "mockToken123" });
};
