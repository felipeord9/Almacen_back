const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");

const find = async () => {
  const products = await models.Product.findAll();

  return products;
};

const findOne = async (id) => {
  const product = await models.Product.findByPk(id);

  if (!product) throw Error("No se encontro el producto");

  return product;
};

const create = async (data) => {
  const newProduct = await models.Product.bulkCreate(data);

  return newProduct;
};

module.exports = {
  find,
  findOne,
  create,
};
