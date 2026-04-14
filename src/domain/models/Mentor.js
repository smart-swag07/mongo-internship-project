const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: String,

  age: {
    type: Number,
    validate: {
      validator: function(v) {
        return v > 20;
      },
      message: "Mentor age must be greater than 20"
    }
  }
});

module.exports = mongoose.model("Mentor", MentorSchema);