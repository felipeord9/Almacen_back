const express = require('express')
const ColaboratorController = require('../../controllers/colaboratorController')

const router = express.Router()

router
    .get('/', ColaboratorController.findAllColaborators)
    .get('/:id', ColaboratorController.findOneColaborator)
    .post('/', ColaboratorController.createColaborator)

module.exports = router