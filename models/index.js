const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config').development;

// Inicializa o Sequelize com as configurações do banco de dados
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {
  sequelize,
  Sequelize,
  User: require('./user')(sequelize, DataTypes),
  Album: require('./album')(sequelize, DataTypes),
  Track: require('./track')(sequelize, DataTypes),
};

// Define as associações entre modelos, se aplicável
db.User.hasMany(db.Album);
db.Album.belongsTo(db.User);
db.Album.hasMany(db.Track);
db.Track.belongsTo(db.Album);

module.exports = db;

