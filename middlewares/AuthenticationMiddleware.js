const checkAuthenticated = (req, res, next) => {
  const { user } = req.session;

  if (!user) {
    return res.status(401).json({ error: true, message: "Unauthorized" });
  }

  next();
};

module.exports = checkAuthenticated
