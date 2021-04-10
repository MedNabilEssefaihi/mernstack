const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//package
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const sendingEmail = require("../email/sendMail");

const userSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      minLength: 3,
    },
    prenom: {
      type: String,
      required: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      validate: [(val) => isEmail(val), "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: 8,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//before saving (mongoose hooks)
userSchema.pre("save", async function (next) {
  //send an email to user created
  sendingEmail(this);
  //hashing password
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = model("user", userSchema);

module.exports = User;
