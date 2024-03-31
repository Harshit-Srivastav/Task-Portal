const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasksRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Using Express Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopping_portal').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
