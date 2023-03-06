const express = require('express');
const router = express.Router();
const { ajoutuser, userliste, modifieruser, deleteuser, getUserById, affecte, dessafacte } = require('../Controllers/user.controller')

router.get("/", userliste)
router.get("/:idUser", getUserById)
router.post("/add", ajoutuser)
router.put("/update/:id", modifieruser)
router.delete("/delete/:id", deleteuser)
router.put('/affecte/:userid/:todoid', affecte)
router.put('/dessaffecte/:userid/:todoid', dessafacte)
module.exports = router;