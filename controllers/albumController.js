// controllers/albumController.js
const { Album, User } = require('../models');

const createAlbum = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const album = await Album.create({ ...req.body, userId: user.id });
    res.status(201).json(album);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll({ include: User });
    res.status(200).json(albums);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }
    await album.update(req.body);
    res.status(200).json(album);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findByPk(req.params.id);
    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }
    await album.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createAlbum, getAlbums, updateAlbum, deleteAlbum };
