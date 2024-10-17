const adminCredentials = {
    username: "admin",
    password: "admin123",
  };
  
  const adminLogin = (req, res) => {
    const { username, password } = req.body;
  
    if (username === adminCredentials.username && password === adminCredentials.password) {
      return res.status(200).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  };
  
  module.exports = { adminLogin };
  