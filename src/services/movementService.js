const { models } = require('../libs/sequelize')

const find = async () => {
  const movements = await models.Movement.findAll({
    include: ['cellar', 'product', 'colaborator'],
    order: [['createdAt', 'DESC']]
  })

  return movements
}

const findOne = async (id) => {
  const movement = await models.Movement.findByPk(id, {
    include: ['cellar', 'product', 'colaborator']
  })
  
  if(!movement) throw Error('El movimiento no existe')
  
  return movement
}

const create = async (data) => {
  const result = await models.Movement.create(data)
  return result
}

const update = async (id, changes) => {
  const movement = await findOne(id)
  const result = await movement.update(changes)
  return result
}

const remove = async (id) => {
  const result = await models.Movement.destroy(id)
  return result
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
};
