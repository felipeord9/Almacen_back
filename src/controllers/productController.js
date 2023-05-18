const ProductService = require("../services/productService");

const findAllProducts = async (req, res, next) => {
  try {
    const data = await ProductService.find();
    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneProduct = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await ProductService.findOne(id);

    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

const createProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const data = ProductService.create(body);

    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
};

module.exports = {
  findAllProducts,
  findOneProduct,
  createProduct,
};
