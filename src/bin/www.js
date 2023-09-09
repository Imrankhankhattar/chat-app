// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/create-user', (req, res) => {
    
    res.send('Hello, Express!');
  });

// Start the server on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
