const { Model, DataTypes, Sequelize } = require("sequelize");
const { COLABORATOR_TABLE } = require("./colaboratorModel");
const { CELLAR_TABLE } = require("./cellarModel");
const { PRODUCT_TABLE } = require("./productModel");

const MOVEMENT_TABLE = "movements";

const MovementSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  note: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  flag: {
    type: DataTypes.ENUM,
    values: ["PRODUCCION", "LOGISTICA", "CALIDAD"],
    allowNull: false,
  },
  movementType: {
    type: DataTypes.STRING,
    allowNull: false,
    //field: 'movement_type'
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
    defaultValue: DataTypes.DATE,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: "deleted_at"
  },
  deletedBy: {
    type: DataTypes.STRING,
    allowNull: true,
    field: "deleted_by"
  },
  colaboratorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "colaborator_id",
    reference: {
      model: COLABORATOR_TABLE,
      key: "colaborator_id",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id",
    reference: {
      model: CELLAR_TABLE,
      key: "product_id",
    },
  },
  cellarId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "cellar_id",
    reference: {
      model: CELLAR_TABLE,
      key: "cellar_id",
    },
  },
};

class Movement extends Model {
  static associate(models) {
    this.belongsTo(models.Colaborator, { as: "colaborator" });
    this.belongsTo(models.Product, { as: "product" });
    this.belongsTo(models.Cellar, { as: "cellar" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVEMENT_TABLE,
      modelName: "Movement",
      timestamps: false,
    };
  }
}

module.exports = {
  MOVEMENT_TABLE,
  MovementSchema,
  Movement,
};
