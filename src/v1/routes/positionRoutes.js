const express = require("express");
const PositionController = require("../../controllers/positionController");

const router = express.Router();

router.get("/", PositionController.findAllPositions);

module.exports = router;
