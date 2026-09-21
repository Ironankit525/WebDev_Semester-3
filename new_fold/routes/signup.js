const express = require("express");
const bcryptjs = require("bcryptjs");
const router = express.Router();

const User = require("../models/db.js");

router.post("/signUp", async (req, res) => {
  try {
    const { name, email, passWord, role } = req.body;

    const findData = await User.findOne({ email });

    if (findData) {
      return res.send("User already exists");
    }

    const updatedP = await bcryptjs.hash(passWord, 10);

    const userInfo = new User({
      name,
      email,
      passWord: updatedP,
      role: role || "user",
    });

    await userInfo.save();
    res.send("Done");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
