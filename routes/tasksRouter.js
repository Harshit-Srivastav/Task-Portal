const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a task
router.post('/', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single task
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) throw new Error('Task not found');
    res.json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Update a task
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) throw new Error('Task not found');
    res.json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) throw new Error('Task not found');
    res.json({ message: 'Task deleted successfully', task });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.delete('/', async(req, res) => {
  try{
    const tasks = await Task.deleteMany({})
    if(!tasks) throw new Error('No Task Exists')
    res.json({message: "Tasks deleted successfully"})
  } catch(e) {
    res.status(404).json({ error: err.message });
  }
})
module.exports = router;
