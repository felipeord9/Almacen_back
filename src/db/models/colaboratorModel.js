const { Model, DataTypes, Sequelize } = require("sequelize");

const COLABORATOR_TABLE = "colaborators";

const ColaboratorSchema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Colaborator extends Model {
  static associate(models) {
    this.hasMany(models.Movement, {
      as: 'movements',
      foreignKey: 'colaboratorId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COLABORATOR_TABLE,
      modelName: "Colaborator",
      timestamps: false,
    }
  }
}

module.exports = {
  COLABORATOR_TABLE,
  ColaboratorSchema,
  Colaborator,
};
