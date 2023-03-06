const { populate } = require('../Models/user')
const User = require('../Models/user')

exports.userliste = async (req, res) => {
    try {
        const liste = await User.find()
        res.send({ type: 'GET', liste })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.idUser).populate('todos')
        res.send({ message: 'user', user })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })

    }
}

exports.ajoutuser = async (req, res) => {
    try {
        await User.create(req.body)
        res.send({ message: "Ajouté avec succés" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message || 'error!' })
    }
}


exports.modifieruser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: 'User a été modifié avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })

    }
}

exports.deleteuser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id)
        res.send({ message: 'User a été supprimé avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.affecte = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.userid, { $push: { todos: req.params.todoid } })
        res.send({ message: 'Affecté avec succés' })
    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}

exports.dessafacte = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.userid, { $pull: { todos: req.params.todoid } })
        res.send({ message: 'Dissaffecté avec succés' })

    } catch (error) {
        res.status(500).send({ message: error.message || 'error!' })
    }
}