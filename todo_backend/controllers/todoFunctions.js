const Todo = require('../models/todo')

const Func = {
    getTodos: (callback) => {
        Todo.find({})
            .then(todos => {
                callback(todos)
            })
    },

    createTodo: (todo, callback) => {
        let newTodo = Todo(
            {
                text: todo,
                complete: "false",
                created_at: Date(),
                updated_at: Date()
            }
        )
        newTodo.save()
            .then(todo => {
                callback(todo)
                console.log(todo)
            })
            .catch(err => {
                console.log(err)
            })

    },

    updateTodo: (id, bool, callback) => {
        let conditions = { _id: id }
        let update = {
            complete: bool,
            updated_at: Date()
        }
        let options = { new: true }
        Todo.findOneAndUpdate(conditions, update, options)
            .then(updatedTodo => {
                callback(updatedTodo)
            })
            .catch(err => {
                console.log(err)
            })
    },

    deleteTodo: (id, callback) => {
        Todo.findOneAndRemove({ '_id': id })
            .then(removedTodo => {
                callback(removedTodo)
            })
            .catch(err => {
                console.log(err)
            })
    },

    deleteComplete: (callback) => {
        Todo.remove({complete: true})
            .then(status => {
                callback(status)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = Func