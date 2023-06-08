const jwt = require('jsonwebtoken');

exports.generateToken = async (req, res) => {
  try {
        const {userid} = req.body;
        //console.log(userid);

        const token = jwt.sign({ userid: userid }, process.env.JWT_SECRET, {
        expiresIn: "7d",});
        res.json({ token });
        }catch (err) {
          console.log(err);
      }

};



/*
function generateToken(userId, secretKey) {
  const payload = { userId };
  const options = {
    expiresIn: '1h' // Token expires in 1 hour
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
}*/


// Example usage
//const userId = '123456789';
//const secretKey = 'your-secret-key';

//const token = generateToken(userId, secretKey);
//console.log(token);

