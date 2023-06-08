const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {
  const payload = { userId };
  const options = {
    expiresIn: '1h' // Token expires in 1 hour
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// Example usage
const userId = '123456789';
const secretKey = 'your-secret-key';

//const token = generateToken(userId, secretKey);
//console.log(token);