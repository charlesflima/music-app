const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

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

// Associações
db.User.hasMany(db.Album);
db.Album.belongsTo(db.User);
db.Album.hasMany(db.Track);
db.Track.belongsTo(db.Album);

module.exports = db;
