// models/track.js
module.exports = (sequelize, DataTypes) => {
    const Track = sequelize.define('Track', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Track;
  };
  