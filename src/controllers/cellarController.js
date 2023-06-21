const CellarService = require('../services/cellarService')

const findAllCellars = async (req, res, next) => {
    try {
        const data = await CellarService.find()
        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
       next(error) 
    }
}

const findOneCellar = async (req, res, next) => {
    try {
        const { params: { id }} = req
        const data = await CellarService.findOne(id)

        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

const createCellar = async (req, res, next) => {
    try {
        const { body } = req
        const data = CellarService.create(body)

        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

const getTotalAmount = async (req, res) => {
    try {
        const data = await CellarService.getTotalAmount()
        
        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(400).json({ error })
    } 
}

const getAllCellarsExistence = async (req, res) => {
    try {
        const data = await CellarService.getAllCellarsExistence()

        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

const getCellarExistence = async (req, res) => {
    try {
        const { params: { id }} = req
        const data = await CellarService.getCellarExistence(id)

        res.status(201).json({
            status: 'OK',
            data
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

module.exports = {
    findAllCellars,
    findOneCellar,
    createCellar,
    getTotalAmount,
    getAllCellarsExistence,
    getCellarExistence
}