// here "mongodb" refers to the name of the mongo service defined in the docker-compose file
const MONGO_IP = process.env.MONGO_IP || "mongodb";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

// here "redis" refers to the name of the redis service defined in the docker-compose file
const REDIS_HOST = process.env.REDIS_HOST || "redis";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const SESSION_SECRET = process.env.SESSION_SECRET;

module.exports = {
  MONGO_DB_URL: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`,
  REDIS_URL: REDIS_HOST,
  REDIS_PORT,
  SESSION_SECRET,
};
