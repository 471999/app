// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, this is a Node.js app!');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
