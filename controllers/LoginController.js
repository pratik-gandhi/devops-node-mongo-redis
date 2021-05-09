const loginService = require("../services/LoginService");

const signUp = async (req, res) => {
  try {
    const user = await loginService.signup(req.body);
    return res
      .status(201)
      .json({ error: false, data: { username: user.username } });
  } catch (err) {
    return res.status(500).json({ error: true, data: { message: err } });
  }
};

const login = async (req, res) => {
  try {
    const user = await loginService.login(req.body);

    if (!user) {
      return res
        .status(400)
        .json({ error: false, messaged: "Wrong credentials" });
    }

    return res.status(200).json({ error: false, messaged: "Logged in" });
  } catch (err) {
    res.status(500).json({ error: true, message: err });
  }
};

module.exports = {
  signUp,
  login,
};
