// models/album.js
module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define('Album', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Album;
  };
  