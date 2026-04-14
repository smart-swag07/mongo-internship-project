const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    minlength: 6
  },
  mobile: {
  type: String,
  match: [/^[0-9]{10}$/, "Invalid mobile number"]
}
});

module.exports = mongoose.model("User", UserSchema);