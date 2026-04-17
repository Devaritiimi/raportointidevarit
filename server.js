const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Handle login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send("<h1>Login successful</h1>");
  } else {
    res.send("<h1>Invalid credentials</h1>");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});