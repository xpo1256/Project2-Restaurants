const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], required: true }
});

// تشفير كلمة المرور تلقائيًا قبل الحفظ
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// دالة لتوليد توكن JWT
userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, "secret"); // يفضل وضع 'secret' في env
};

module.exports = mongoose.model("User", userSchema);
