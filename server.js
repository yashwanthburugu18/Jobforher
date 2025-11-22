const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); 
require('dotenv').config()
const app = express();
const PORT = 5000;


app.use(cors({
    origin: "https://jobforher.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend")));


const db = mysql.createConnection({
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// Routes
app.get("/", (req, res) => {
  res.render('index.html')
  res.send("JOBFORHER Backend Running 🚀");
});

// Register User
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error: " + err });
    }
         res.json({ success: true, message: "Registered successfully!" });
  });
});

// Login User
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err });
    if (results.length > 0) {
      res.json({ success: true, name: results[0].name });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
