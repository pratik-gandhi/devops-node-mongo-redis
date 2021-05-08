const express = require("express");

const app = express();

const mainMessage = `<h1>${process.env.MESSAGE || "Hello there!!"} 🎊</h1>`;
const subtext = `<h2>....from ${process.env.HOSTNAME} 😃</h2>`;
const paragraph = ` This seems interesting! 🔥`;

app.get("/", (req, res) => {
  res.status(200).send(`${mainMessage}\n${subtext}\n${paragraph}`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
