// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db'); // Import the database connection function

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Define Routes (example)
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
