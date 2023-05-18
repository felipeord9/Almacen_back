const express = require("express");
const cors = require("cors");
const { config } = require("./config/config");
const routerApi = require("./v1/routes");

const { port, host } = config;

const app = express();

app.use(express.json());
app.use(cors());

routerApi(app)

app.listen(port, host, () => {
  console.log(`Server on http://${host}:${port}`);
});
