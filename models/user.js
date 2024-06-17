module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Album, {
      foreignKey: 'userId',
      as: 'albums' // Alias para a associação
    });
  };

  return User;
};


  