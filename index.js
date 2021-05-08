const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!!</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
