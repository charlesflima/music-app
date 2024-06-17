// routes/albumRoutes.js
const express = require('express');
const { createAlbum, getAlbums, updateAlbum, deleteAlbum } = require('../controllers/albumController');
const router = express.Router();

router.post('/', createAlbum);
router.get('/', getAlbums);
router.put('/:id', updateAlbum);
router.delete('/:id', deleteAlbum);

module.exports = router;
