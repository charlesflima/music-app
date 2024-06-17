const { User, Album, Track } = require('../models');

const createUser = async (req, res) => {
  const { name, email } = req.body;
  
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId, {
      include: [{
        model: Album,
        as: 'albums',
        include: [{
          model: Track,
          as: 'tracks'
        }]
      }]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser, getUser };

