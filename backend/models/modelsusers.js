const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  progress: { type: Number, default: 0 },
  quizzesTaken: { type: Array, default: [] },
});

module.exports = mongoose.model("User", userSchema);
