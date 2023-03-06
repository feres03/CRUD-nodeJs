const ToDo = require('../Models/todo')

exports.getList = async (req, res) => {
    try {
        const liste = await ToDo.find()
        res.send(liste)
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.gettodoById = async (req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id)
        res.send(todo)
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.createToDo = async (req, res) => {
    try {
        await ToDo.create(req.body)
        res.send({ message: 'Ajouté avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.updateTodo = async (req, res) => {
    try {
        await ToDo.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'Modifié avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        await ToDo.findByIdAndRemove(req.params.id)
        res.send({ message: 'Suuprimé avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}
