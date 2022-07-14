const db = require('../db');
const { ObjectId } = require('mongodb');

async function getAllTasks (req, res) {
  try {
    const tasks = await db.client.db('taskManager').collection('tasks').find({}).toArray();
    res.status(200);
    res.send(tasks);
  } catch (error) {
    console.log(error);
  }
}

async function postTask (req, res) {
  try {
    const task = req.body;
    await db.client.db('taskManager').collection('tasks').insertOne(task);
    res.status(201);
    res.send('Task added.')
  } catch (error) {
    console.log(error);
  }
}

async function deleteTask (req, res) {
  try {
    const taskId = req.params.taskId;
    await db.client.db('taskManager').collection('tasks').findOneAndDelete({_id: ObjectId(taskId)});
    res.status(200);
    res.send('Task deleted.')
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTasks,
  postTask,
  deleteTask
}