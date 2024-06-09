const mongoose = require('mongoose');

// Define the schema for the Task model
const taskSchema = new mongoose.Schema({
  // Title of the task, required field
  title: {
    type: String,
    required: true,
  },
  // Description of the task, optional field
  description: {
    type: String,
  },
  // Due date of the task, optional field
  dueDate: {
    type: Date,
  },
});

// Create the Task model from the schema
const Task = mongoose.model('Task', taskSchema);

// Export the Task model
module.exports = Task;
