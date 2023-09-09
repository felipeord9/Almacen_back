const ColaboratorService = require("../services/colaboratorService");

const findAllColaborators = async (req, res, next) => {
  try {
    const data = await ColaboratorService.find();
    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneColaborator = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await ColaboratorService.findOne(id);

    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createColaborator = (req, res, next) => {
  try {
    const { body } = req;
    const data = ColaboratorService.create(body);

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
  findAllColaborators,
  findOneColaborator,
  createColaborator,
};
