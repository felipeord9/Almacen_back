const fs = require('fs')
const { models } = require("../libs/sequelize");

const find = async () => {
  const products = await models.Product.findAll({
    order: [['id', 'ASC']]
  });

  return products;
};

const findOne = async (id) => {
  const product = await models.Product.findByPk(id);

  if (!product) throw Error("No se encontro el producto");

  return product;
};

const create = async (data) => {
  const newProduct = await models.Product.create(data);

  return newProduct;
};

const update = async (id, changes) => {
  const product = await findOne(id);
  const updatedProduct = await product.update(changes);

  return updatedProduct;
};

const destroy = async (id) => {
  const product = await findOne(id);
  await product.destroy(id);
  const exist = fs.existsSync(`public/${product.photo}`)
  if(exist) {
    fs.rmSync(`public/${product.photo}`)
  }
  return { id };
};

module.exports = {
  find,
  findOne,
  create,
  update,
  destroy
};
