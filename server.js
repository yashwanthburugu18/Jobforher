const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); 
const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: "ammu@123",  
  database: "jobforher"
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
  res.send("JOBFORHER Backend Running 🚀");
});

// Register User
app.post("/register", (req, res) => {
  const { name, email, password, bio } = req.body;
  const sql = "INSERT INTO users (name, email, password, bio) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, password, bio], (err) => {
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
