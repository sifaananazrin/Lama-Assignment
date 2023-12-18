const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const saltRounds = 10;
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password, name } = req.body;

      const hashedPassword = await bcrypt.hash(String(password), saltRounds);

      let user = new User({
        email,
        password: hashedPassword,
        name,
      });
      user = await user.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error registering new user:", error);
      res.status(500).json({ error: "Error registering new user" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Request data:", email, password);

      const user = await User.findOne({ email });
      console.log("User found:", user);

      if (!user) {
        console.log("Invalid email or password");
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const userPassword = String(user.password);
      const enteredPassword = String(password);

      const isMatch = await bcrypt.compare(enteredPassword, userPassword);
      console.log("Password match:", isMatch);

      if (isMatch) {
        const token = jwt.sign({ userId: user._id }, secretKey, {
          expiresIn: "1d",
        });

        console.log("Login successful");
        res.status(200).json({ token });
      } else {
        console.log("Invalid email or password");
        res.status(401).json({ error: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Error during login" });
    }
  },
};
