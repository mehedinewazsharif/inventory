const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {

  // Get the token from the request headers
  const token = req.headers.authorization;


// Check if the token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded token to the request object for further use
    req.userId = decoded.userId;

    res.json({ message: 'Authorized' });


    // Call the next middleware function
    next();
  } catch (err) {
    // If the token verification fails, return a 401 Unauthorized error
    res.status(401).json({ error: 'Unauthorized' });
  }
}

module.exports = authenticate;
