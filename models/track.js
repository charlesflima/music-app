module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER // ou outro tipo para representar a duração da faixa
    }
  });

  Track.associate = (models) => {
    Track.belongsTo(models.Album, {
      foreignKey: 'albumId',
      onDelete: 'CASCADE'
    });
  };

  return Track;
};

  