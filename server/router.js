const router = require('express').Router();
const ctrl = require('./controllers/task')

router.get('/tasks', ctrl.getAllTasks);
router.post('/tasks', ctrl.postTask);
router.delete('/tasks/:taskId', ctrl.deleteTask);

module.exports = router