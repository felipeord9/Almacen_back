const express = require("express");
const movementRoutes = require("./movementRoutes");
const colaboratorRoutes = require("./colaboratorRoutes");
const productRoutes = require("./productRoutes");
const cellarRoutes = require('./cellarRoutes')
const positionRoutes = require('./positionRoutes')
const multerRoutes = require('./multerRoutes')

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1/", router);

  router.use("/movements", movementRoutes);
  router.use("/colaborators", colaboratorRoutes);
  router.use("/products", productRoutes);
  router.use('/cellars', cellarRoutes)
  router.use('/positions', positionRoutes)
  router.use('/upload', multerRoutes)
}

module.exports = routerApi;
