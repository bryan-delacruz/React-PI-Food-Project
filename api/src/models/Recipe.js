const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      spoonacularScore: {
        type: DataTypes.INTEGER,
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      steps: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
