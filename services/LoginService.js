const bcrypt = require("bcryptjs");

const User = require("../models/User");

const signup = async (user) => {
  try {
    const { username, password } = user;
    const hashedPassword = await bcrypt.hash(password, 12);
    return await User.create({ username, password: hashedPassword });
  } catch (error) {
    console.error(
      `Error occurred when saving user ${user.username} : error ${error}`
    );
    throw error;
  }
};

const login = async (user) => {
  try {
    const { username, password } = user;
    const dbUser = await User.findOne({ username });

    if (!dbUser) {
      throw "Wrong credentials";
    }

    const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);

    if (!isPasswordCorrect) {
      throw "Wrong credentials";
    }

    return dbUser;
  } catch (err) {
    console.error(
      `Error occurred when searching for user ${user.username} : error ${err}`
    );
    throw err;
  }
};

module.exports = {
  signup,
  login,
};
