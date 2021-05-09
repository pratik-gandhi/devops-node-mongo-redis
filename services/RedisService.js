const redis = require("redis");
const config = require("../config");

const redisClient = redis.createClient(config.REDIS_PORT, config.REDIS_URL);

redisClient.on("connect", () => {
  console.log("Connected to redis");
});

redisClient.on("error", (err) => {
  console.error(`Error occurred when connecting to redis ${err}`);
  os.exit(1);
});

module.exports = {
  redisClient,
};
