const express = require("express");

const homeRouter = express.Router();

const mainMessage = `<h1>${process.env.MESSAGE || "Hello there!!"} 🎊</h1>`;
const subtext = `<h2>....from ${process.env.HOSTNAME} 😃</h2>`;
const paragraph = ` This seems interesting! 🔥`;

homeRouter.get("/", (req, res) => {
  res.status(200).send(`${mainMessage}\n${subtext}\n${paragraph}`);
});

module.exports = homeRouter;
