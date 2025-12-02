const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// simple email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    console.log("SUBSCRIBE BODY:", req.body);
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // prevent duplicate emails
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.log("SUBSCRIBE ERROR:", error);

    // handle duplicate key error from MongoDB just in case
    if (error && error.code === 11000) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
