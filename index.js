const express = require("express");

const blogPostRouter = require("./routes/BlogPostRouter");
const homeRouter = require("./routes/HomeRouter");
const { connectWithRetry } = require("./services/MongoDBService");

connectWithRetry();

const app = express();

// Setup middlewares
// json body parser for CRUD operations
app.use(express.json());

// Setup routes
app.use("/api/v1/posts", blogPostRouter);
app.use("/", homeRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
