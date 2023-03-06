const express = require('express');
const router = express.Router();
const { getList, gettodoById, createToDo, updateTodo, deleteToDo } = require('../Controllers/todo.controller')

router.get('/', getList)
router.get('/:idUser', gettodoById)
router.post('/Add', createToDo)
router.put('/Update/:id', updateTodo)
router.delete('/Delete/:id', deleteToDo)

module.exports = router;
