const mongoose = require('mongoose');
mongoose.set('runValidators', true); // Enable global validation

// Creating Schema 
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  
}, { timestamps: true });

// Model Creation
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;




