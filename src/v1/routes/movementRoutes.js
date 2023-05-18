const express = require("express");
const MovementController = require("../../controllers/movementController");

const router = express.Router();

router
  .get("/", MovementController.findAllMovements)
  .get("/:id", MovementController.findOneMovements)
  .post("/", MovementController.createMovement)
  .patch('/:id', MovementController.updateMovement)

module.exports = router;
