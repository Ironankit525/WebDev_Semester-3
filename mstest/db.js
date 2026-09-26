let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
name: String,
email: String,
passWord: String,
role: { type: String, default: "user" },
resetToken: String,
resetTokenExpiry: Date
});
let User = mongoose.model("User", userSchema); // collection: users
module.exports = User;