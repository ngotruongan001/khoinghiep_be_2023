const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25
    },
    identify: {
      type: String,
      trim: true,
      maxlength: 12,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    role: { type: String, default: "user" },
    gender: { type: String, default: "male" },
    phoneNumber: { type: String, default: "" },
    cmnd: { type: String, default: "" },
    address: { type: String, default: "" },
  }, {
  timestamps: true
})


module.exports = mongoose.model("user", userSchema);
