/*Create REST API for Product resources with below End points

  Create New Product            POST      /product              
  Read all Products             GET       /products
  Read a Product by ID          GET       /products/<productId>
  Update a Product by ID        PUT       /products/<productsId>
  Add a review to a Product     PUT       /products/<productsId>/review
  Remove a Product by ID        DELETE    /products/<productId>



Sample Product resource:
    {
      productId:" ",
      productName:"  ",
      price: " ",
      brand: " ",
      reviews : [ ]
    
    }*/
   // server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // To parse JSON request bodies

// In-memory product storage
let products = [];

// Helper function to generate unique IDs
const generateId = () => Math.random().toString(36).substr(2, 9);

// 1. Create New Product
app.post('/product', (req, res) => {
  const { productName, price, brand } = req.body;
  if (!productName || !price || !brand) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newProduct = {
    productId: generateId(),
    productName,
    price,
    brand,
    reviews: []
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// 2. Read all Products
app.get('/products', (req, res) => {
  res.json(products);
});

// 3. Read a Product by ID
app.get('/products/:productId', (req, res) => {
  const product = products.find(p => p.productId === req.params.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// 4. Update a Product by ID
app.put('/products/:productId', (req, res) => {
  const product = products.find(p => p.productId === req.params.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { productName, price, brand } = req.body;
  if (productName) product.productName = productName;
  if (price) product.price = price;
  if (brand) product.brand = brand;

  res.json(product);
});

// 5. Add a review to a Product
app.put('/products/:productId/review', (req, res) => {
  const product = products.find(p => p.productId === req.params.productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { review } = req.body;
  if (!review) return res.status(400).json({ message: "Review is required" });

  product.reviews.push(review);
  res.json(product);
});

// 6. Remove a Product by ID
app.delete('/products/:productId', (req, res) => {
  const index = products.findIndex(p => p.productId === req.params.productId);
  if (index === -1) return res.status(404).json({ message: "Product not found" });

  products.splice(index, 1);
  res.json({ message: "Product removed successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
