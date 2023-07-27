'use strict';

const { COLABORATOR_TABLE, ColaboratorSchema} = require('../models/colaboratorModel')
const {PRODUCT_TABLE, ProductSchema} = require('../models/productModel')
const {CELLAR_TABLE, CellarSchema} = require('../models/cellarModel')
const {POSITION_TABLE, PositionSchema} = require('../models/positionModel')
const {MOVEMENT_TABLE, MovementSchema} = require('../models/movementModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COLABORATOR_TABLE, ColaboratorSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
    await queryInterface.createTable(CELLAR_TABLE, CellarSchema)
    await queryInterface.createTable(POSITION_TABLE, PositionSchema)
    await queryInterface.createTable(MOVEMENT_TABLE, MovementSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COLABORATOR_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(CELLAR_TABLE)
    await queryInterface.dropTable(POSITION_TABLE)
    await queryInterface.dropTable(MOVEMENT_TABLE)
  }
};
