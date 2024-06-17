// controllers/trackController.js
const { Track, Album } = require('../models');

const createTrack = async (req, res) => {
  try {
    const album = await Album.findByPk(req.body.albumId);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }
    const track = await Track.create({ ...req.body, albumId: album.id });
    res.status(201).json(track);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTracks = async (req, res) => {
  try {
    const tracks = await Track.findAll({ include: Album });
    res.status(200).json(tracks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTrack = async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    await track.update(req.body);
    res.status(200).json(track);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTrack = async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);
    if (!track) {
      return res.status(404).json({ error: 'Track not found' });
    }
    await track.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTrack, getTracks, updateTrack, deleteTrack };
