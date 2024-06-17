const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Rota para criar um usuário
router.post('/', createUser);

// Rota para obter um usuário com seus álbuns e faixas pelo ID
router.get('/:id', getUser);

// Rota para atualizar um usuário pelo ID
router.put('/:id', updateUser);

// Rota para excluir um usuário pelo ID
router.delete('/:id', deleteUser);

module.exports = router;


