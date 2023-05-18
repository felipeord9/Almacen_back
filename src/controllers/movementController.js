const MovementService = require("../services/movementService");

const findAllMovements = async (req, res) => {
  try {
    const data = await MovementService.find();
    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    res.json({ error });
  }
};

const findOneMovements = async (req, res, next) => {
  try {
    const {
      params: { id }
    } = req;
    const data = await MovementService.findOne(id);

    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    res.json({ error });
  }
};

const createMovement = async (req, res) => {
  try {
    const { body } = req;
    const data = await MovementService.create(body);

    res.status(201).json({
      status: "OK",
      data,
    });
  } catch (error) {
    res.json({ error })
  }
};

const updateMovement = async (req, res) => {
  try {
    const { params: { id }, body } = req
    const data = await MovementService.update(id, body)

    res.status(201).json({
      status: "OK",
      data
    })
  } catch (error) {
    res.json({
      error
    })
  }
}

module.exports = {
  findAllMovements,
  findOneMovements,
  createMovement,
  updateMovement
};
