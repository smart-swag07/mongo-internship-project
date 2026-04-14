const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  internId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: {
  type: String,
  enum: ["Present", "Absent", "Leave"]
},
  checkInTime: String
});

module.exports = mongoose.model("Attendance", AttendanceSchema);