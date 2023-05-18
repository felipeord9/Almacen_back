const { Model, DataTypes, Sequelize } = require("sequelize");

const CELLAR_TABLE = "cellars";

const CellarSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  warehouseCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
};

class Cellar extends Model {
  static associate(models) {
    this.hasMany(models.Movement, {
      as: 'movements',
      foreignKey: 'cellarId'
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CELLAR_TABLE,
      modelName: "Cellar",
      timestamps: false,
    };
  }
}

module.exports = {
  CELLAR_TABLE,
  CellarSchema,
  Cellar,
};
