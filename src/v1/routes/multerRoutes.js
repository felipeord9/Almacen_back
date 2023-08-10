const express = require("express");
const multerController = require('../../controllers/multerController')
const multerService = require('../../services/multerService')

const router = express.Router() 

router.post('/', multerService.upload.single('photo'), multerController.uploadFile)

module.exports = router