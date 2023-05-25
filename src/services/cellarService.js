const sequelize = require("../libs/sequelize");
const { models } = require("../libs/sequelize");

const find = async () => {
  const cellars = await models.Cellar.findAll();

  return cellars;
};

const findOne = async (id) => {
  const cellar = await models.Cellar.findByPk(id, {
    include: {
      association: "movements",
      include: ["colaborator", "product"],
    },
  });

  if (!cellar) throw Error("No se encontro la bodega");

  return cellar;
};

const create = async (data) => {
  const newCellar = await models.Cellar.create(data);

  return newCellar;
};

const getTotalAmount = async () => {
  const total = await sequelize.query(`
  SELECT "Cellar"."id", "Cellar"."nombre", "Cellar"."password", "Cellar"."warehouseCapacity", 
    (SUM(CASE WHEN deleted = false AND movements."movementType" ='entrada' THEN conversion * movements.amount ELSE 0 END) -
    SUM(CASE WHEN deleted = false AND movements."movementType" = 'salida' THEN conversion * movements.amount ELSE 0 END)
    ) AS total 
    FROM "cellars" AS "Cellar"
    LEFT OUTER JOIN "movements" AS "movements" ON "Cellar"."id" = "movements"."cellar_id" 
    LEFT OUTER JOIN "products" AS "movements->product" ON "movements"."product_id" = "movements->product"."id"
    GROUP BY "Cellar"."id"`);

  return total[0];
};

const getExistence = async () => {
  const existence = await sequelize.query(`
  SELECT product_id AS id, description, um,
	(
	SUM(CASE WHEN deleted = false AND movements."movementType" ='entrada' THEN movements.amount ELSE 0 END) -
  SUM(CASE WHEN deleted = false AND movements."movementType" = 'salida' THEN movements.amount ELSE 0 END)
  ) AS total 
  FROM "cellars" AS "Cellar"
  LEFT OUTER JOIN "movements" AS "movements" ON "Cellar"."id" = "movements"."cellar_id" 
  LEFT OUTER JOIN "products" AS "movements->product" ON "movements"."product_id" = "movements->product"."id"
  WHERE "product_id" IS NOT NULL
  GROUP BY product_id, description, um
  `);

  return existence[0];
};

module.exports = {
  find,
  findOne,
  create,
  getTotalAmount,
  getExistence,
};
