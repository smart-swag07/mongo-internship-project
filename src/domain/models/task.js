const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
  type: String,
  required: true
},
  status: {
  type: String,
  enum: ["Pending", "In Progress", "Completed"]
},
  priority: {
  type: String,
  enum: ["Low", "Medium", "High"]
},

  isDeleted: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model("Task", TaskSchema);