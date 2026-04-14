const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: {
  type: String,
  required: true,
  unique: true,
  match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
},
  salary: {
  type: Number,
  min: 20000,
  max: 100000
},
  department: String
}, { timestamps: true });

module.exports = mongoose.model("Employee", EmployeeSchema);