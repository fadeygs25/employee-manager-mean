const express = require('express');
const router = express.Router();
const { createTask, countTasks, findTask, searchTask, displayTask, deleteTask, taskCategory, updateTask } = require("../controllers/taskController")
const { isAuthenticated, isAdmin } = require("../middleware/auth");


router.post('/task/create/:id', isAuthenticated, createTask);
router.get('/task/find/:id', findTask);
router.get('/task/search/:id', searchTask);
router.get('/task/all', displayTask);
router.get('/task/countTasks', countTasks);
router.delete('/task/delete/:id', deleteTask);
router.put('/tasks/update/:id', isAuthenticated, isAdmin, updateTask);
router.get('/task/categories', taskCategory);





module.exports = router;