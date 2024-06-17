module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.DATE
    }
  });

  Album.associate = (models) => {
    Album.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Album.hasMany(models.Track, {
      foreignKey: 'albumId',
      as: 'tracks'
    });
  };

  return Album;
};
