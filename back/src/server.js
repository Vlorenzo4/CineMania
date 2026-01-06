const express = require("express");
const app = express();
const { router } = require("./routes/index");

const morgan = require("morgan");
const cors = require("cors");
const { logData } = require("./middleware");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(logData);
app.use(router);

module.exports = {
  app,
};
