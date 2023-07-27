const PositionService = require('../services/positionService')

const findAllPositions = async (req, res, next) => {
  try {
    const data = await PositionService.find()
    res.status(200).json({
      status: 'OK',
      data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  findAllPositions
}