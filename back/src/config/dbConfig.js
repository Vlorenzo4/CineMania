const mongoose = require("mongoose");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;

const dbCon = async () => {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.nf14nyz.mongodb.net/${DB_NAME}?appName=${DB_CLUSTER}`
  );
};

module.exports = {
  dbCon,
};
