const { Model, DataTypes, Sequelize } = require("sequelize");

const POSITION_TABLE = 'positions'

const PositionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Position extends Model {
  static associate(models) {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: POSITION_TABLE,
      modelName: 'Position',
      timestamps: false
    }
  }
}

module.exports = {
  POSITION_TABLE,
  PositionSchema,
  Position
}