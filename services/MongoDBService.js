const mongoose = require("mongoose");

const { MONGO_DB_URL } = require("../config");

// mongodb://USERNAME:PASSWORD@SERVICE_NAME_FROM_DOCKER_COMPOSE:27017/?authSource=admin

exports.connectWithRetry = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Failed to connect to MongoDB : ${err}`);
    setTimeout(connectWithRetry, 5000);
  }
};
