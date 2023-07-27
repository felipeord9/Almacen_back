const { Cellar, CellarSchema } = require("./cellarModel");
const { Colaborator, ColaboratorSchema } = require("./colaboratorModel");
const { Movement, MovementSchema } = require("./movementModel");
const { Product, ProductSchema } = require("./productModel");
const { Position, PositionSchema } = require("./positionModel");

function setupModels(sequelize) {
  Cellar.init(CellarSchema, Cellar.config(sequelize));
  Colaborator.init(ColaboratorSchema, Colaborator.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Position.init(PositionSchema, Position.config(sequelize))
  Movement.init(MovementSchema, Movement.config(sequelize));

  Cellar.associate(sequelize.models);
  Colaborator.associate(sequelize.models);
  Product.associate(sequelize.models);
  Position.associate(sequelize.models)
  Movement.associate(sequelize.models);
}

module.exports = setupModels;
