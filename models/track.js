module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER, // Defina o tipo de dados correto para a duração da faixa
      allowNull: false
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


  