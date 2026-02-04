const validateEmployee = (req, res, next) => {
  const { name, email, role, department } = req.body;

  if (!name || !email || !role || !department) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  next();
};

module.exports = validateEmployee;
