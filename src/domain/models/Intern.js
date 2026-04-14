const mongoose = require("mongoose");

const InternSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
  minlength: 3
},
  age: {
  type: Number,
  min: 18
},
  email: {
  type: String,
  validate: {
    validator: function(v) {
      return v.endsWith("@gmail.com");
    },
    message: "Email must be a Gmail address"
  }
},

  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },

  address: {
    city: String,
    state: String,
    pincode: String
  },

  skills: [String],

  isActive: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Intern", InternSchema);