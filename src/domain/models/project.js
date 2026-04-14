const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  budget: {
  type: Number,
  min: 0
},
  team: String,
  status: String,

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intern"
  }]
});

module.exports = mongoose.model("Project", ProjectSchema);