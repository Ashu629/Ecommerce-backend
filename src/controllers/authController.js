const jwt = require("jsonwebtoken");
const users = require("../data/users");

const JWT_SECRET = "mysecretkey123"; // in real apps, use process.env.JWT_SECRET

// POST /api/auth/login
const loginUser = (req, res) => {
  const { email, password } = req.body;


  // basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // create a JWT token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token,
  });
};

module.exports = {
  loginUser,
};