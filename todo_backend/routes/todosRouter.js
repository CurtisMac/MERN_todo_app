const express = require('express')
const todosRouter = express.Router()
const Todo = require('../models/todo')
const Func = require('../controllers/todoFunctions')

todosRouter.post('/create', (req, res) => {
    let {todo} = req.body
    Func.createTodo(todo, (todo)=>{
        res.json(todo)
    })
})

todosRouter.get('/read', (req, res) => {
    Func.getTodos((todos)=>{
        res.json(todos)
    })
})

todosRouter.put('/update', (req, res) => {
    let {id, bool} = req.body
    Func.updateTodo(id, bool, (updatedTodo)=>{
        res.json(updatedTodo)
    })
})

//This endpoint is not currently being used, it is intended for future implementation
todosRouter.delete('/delete', (req, res) => {
    let {id} = req.body
    Func.deleteTodo(id, (removedTodo)=>{
        res.json(removedTodo)
    })
})

todosRouter.delete('/del_complete', (req, res) => {
    let { confirm } = req.body
    Func.deleteComplete((status)=>{
        res.json(status)
    })
})

module.exports = todosRouter