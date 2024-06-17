const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser); // Rota para criar um usuário
router.get('/:id', getUser); // Rota para obter um usuário com seus álbuns e faixas

module.exports = router;

