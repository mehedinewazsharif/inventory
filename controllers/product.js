const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    //const products = await Product.find({});  
    const products = await Product.find({}, 'name price');
  
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};




// Create a new product
exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    // Create a new product
    const newProduct = new Product({
      name: name,
      price: price,
      description: description
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();
    console.log('Product saved successfully:', savedProduct);

    // Send a response back to the client
    res.status(200).json(savedProduct);
  } catch (error) {
    console.error('Error saving product:', error);
    // Send an error response back to the client
    res.status(500).json({ error: 'An error occurred while saving the product.' });
  }
};
