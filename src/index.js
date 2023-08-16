const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("./config/config");
const routerApi = require("./v1/routes");

const { port, host } = config;

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

routerApi(app);

app.listen(port, host, () => {
  console.log(`Server on http://${host}:${port}`);
});
