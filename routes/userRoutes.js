const express = requiere ("express");
const router = express.Router();

const usersController = require ("../controllers/userController");

//Formulario de registro
router.get ("/register", usersController.register);
//Procesar el registro
router.post ("/register", usersController.processRegister);

//Formulario de login
router.get ("/login", usersController.login);

//Perfil de usuario
router.get ("/profile/:userId", usersController.profile);

module.exports = router;


