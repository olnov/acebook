const JWT = require("jsonwebtoken");

// Middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {
  // Allow public access to GET requests
  if (req.method === 'GET') {
    return next();
  }

  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.slice(7); // Remove 'Bearer ' from string

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      // Add the user_id from the payload to the req object.
      req.user_id = payload.user_id;
      next();
    }
  });
};

module.exports = tokenChecker;
