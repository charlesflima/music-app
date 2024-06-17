// routes/trackRoutes.js
const express = require('express');
const { createTrack, getTracks, updateTrack, deleteTrack } = require('../controllers/trackController');
const router = express.Router();

router.post('/', createTrack);
router.get('/', getTracks);
router.put('/:id', updateTrack);
router.delete('/:id', deleteTrack);

module.exports = router;
