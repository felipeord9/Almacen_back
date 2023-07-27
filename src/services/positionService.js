const { models } = require('../libs/sequelize')

const find = async () => {
  const positions = await models.Position.findAll()

  return positions
}

const findOne = async (id) => {
  const position = await models.Position.findByPk(id)

  if(!position) throw Error('La posición no existe')

  return position
}

module.exports = {
  find,
  findOne
}