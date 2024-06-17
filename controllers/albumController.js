const { Album, User } = require('../models');

const createAlbum = async (req, res) => {
  const { title, releaseDate, userId } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Cria o álbum associado ao usuário encontrado
    const album = await Album.create({ title, releaseDate, userId });

    return res.status(201).json(album);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll();
    res.status(200).json(albums);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const album = await Album.findByPk(id);
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
  const { id } = req.params;

  try {
    const album = await Album.findByPk(id);
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



