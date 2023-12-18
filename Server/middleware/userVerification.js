const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

dotenv.config();

const validateToken = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; 
  
  if (token === 'null') {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded) {
     
      const userId = decoded.userId;

      
      const user = await User.findById(userId);

      if (!user) {
        return res.status(401).send('User not found.');
      }

    
      req.user = user;

      return next();
    } else {
      console.log("decoded")
      throw new Error();
    }
  } catch (error) {
    res.status(400).send('Invalid Token.');
  }
};

module.exports = validateToken;
