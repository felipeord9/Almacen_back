const { Cellar, CellarSchema } = require('./cellarModel')
const { Colaborator, ColaboratorSchema } = require('./colaboratorModel')
const { Movement, MovementSchema } = require('./movementModel')
const { Product, ProductSchema} = require('./productModel')

function setupModels (sequelize) {
    Cellar.init(CellarSchema, Cellar.config(sequelize))
    Colaborator.init(ColaboratorSchema, Colaborator.config(sequelize))
    Product.init(ProductSchema, Product.config(sequelize))
    Movement.init(MovementSchema, Movement.config(sequelize))

    Cellar.associate(sequelize.models)
    Colaborator.associate(sequelize.models)
    Product.associate(sequelize.models)
    Movement.associate(sequelize.models)
}

module.exports = setupModels