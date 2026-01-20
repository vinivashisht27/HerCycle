const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    // Optional: Default settings for HerCycle
    cycleLength: {
      type: Number,
      default: 28, // Standard cycle length
    },
    periodLength: {
      type: Number,
      default: 5, // Standard period duration
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);