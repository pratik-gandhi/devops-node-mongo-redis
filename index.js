const express = require("express");
const mongoose = require("mongoose");

const { MONGO_DB_URL } = require("./config");

// mongodb://USERNAME:PASSWORD@SERVICE_NAME_FROM_DOCKER_COMPOSE:27017/?authSource=admin

const connectWithRetry = async () => {
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

connectWithRetry();

const app = express();

const mainMessage = `<h1>${process.env.MESSAGE || "Hello there!!"} 🎊</h1>`;
const subtext = `<h2>....from ${process.env.HOSTNAME} 😃</h2>`;
const paragraph = ` This seems interesting! 🔥`;

app.get("/", (req, res) => {
  res.status(200).send(`${mainMessage}\n${subtext}\n${paragraph}`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
