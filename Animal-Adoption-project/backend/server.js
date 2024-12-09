require('dotenv').config();
const express = require("express");
const db = require("./db"); 
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const animalRoutes = require("./routes/animalRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const errorHandler = require("./middleware/errorHandler");


const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/animals", animalRoutes);
app.use("/api/adoptions", adoptionRoutes);
app.use("/api/dashboard", dashboardRoutes);


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
