const { models } = require('../libs/sequelize')

const find = async () => {
    const colaborators = await models.Colaborator.findAll()
    
    return colaborators
}

const findOne = async (id) => {
    const colaborator = await models.Colaborator.findByPk(id)

    if(!colaborator) throw Error('No se encontro el colaborador')
    
    return colaborator
}

const create = async (data) => {
    const newColaborator = await models.Colaborator.bulkCreate(data)

    return newColaborator
}

module.exports = {
    find,
    findOne,
    create
}