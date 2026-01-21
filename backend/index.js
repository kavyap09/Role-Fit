const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const analyzerRoutes = require("./routes/analyzerRoutes");
const authRoutes = require("./routes/authRoutes"); // ⬅ new

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 1) Connect MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/skillmatch") // or your Atlas URL
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 🔹 2) Routes
app.use("/api/auth", authRoutes);   // signup, login
app.use("/api", analyzerRoutes);    // analyzer (we’ll protect it later)

app.listen(5000, () => console.log("Server running on 5000"));
