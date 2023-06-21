const express = require('express')
const CellarController = require('../../controllers/cellarController')

const router = express.Router()

router
    .get('/', CellarController.findAllCellars)
    .get('/total', CellarController.getTotalAmount)
    .get('/existence', CellarController.getAllCellarsExistence)
    .get('/existence/:id', CellarController.getCellarExistence)
    .get('/:id', CellarController.findOneCellar)
    .post('/', CellarController.createCellar)

module.exports = router