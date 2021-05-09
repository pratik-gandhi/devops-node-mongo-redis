const express = require("express");
const session = require("express-session");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);

const blogPostRouter = require("./routes/BlogPostRouter");
const loginRouter = require("./routes/LoginRouter");
const homeRouter = require("./routes/HomeRouter");

const mongoDBService = require("./services/MongoDBService");
const redisService = require("./services/RedisService");

const authenticationMiddleware = require("./middlewares/AuthenticationMiddleware")

const config = require("./config");

mongoDBService.connectWithRetry();

const app = express();

// Setup middlewares
// json body parser for CRUD operations
app.use(express.json());

// session storage
app.use(
  session({
    store: new RedisStore({ client: redisService.redisClient }),
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: true,
      // maxAge: 1 * 60 * 60 * 1000 // 1 hr in milliseconds
      maxAge: 30000 // 1 hr in milliseconds
    },
  })
);

// Setup routes
app.use("/api/v1/posts", authenticationMiddleware, blogPostRouter);
app.use("/api/v1/authentication", loginRouter);
app.use("/", homeRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
