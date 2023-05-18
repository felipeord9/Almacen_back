'use strict';

const { COLABORATOR_TABLE, ColaboratorSchema} = require('../models/colaboratorModel')
const {PRODUCT_TABLE, ProductSchema} = require('../models/productModel')
const {CELLAR_TABLE, CellarSchema} = require('../models/cellarModel')
const {MOVEMENT_TABLE, MovementSchema} = require('../models/movementModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COLABORATOR_TABLE, ColaboratorSchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
    await queryInterface.createTable(CELLAR_TABLE, CellarSchema)
    await queryInterface.createTable(MOVEMENT_TABLE, MovementSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(COLABORATOR_TABLE)
    await queryInterface.drop(PRODUCT_TABLE)
    await queryInterface.drop(CELLAR_TABLE)
    await queryInterface.drop(MOVEMENT_TABLE)
  }
};
