const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to or create the SQLite database
const dbPath = path.resolve(__dirname, "userdb.sqlite");
const db = new Database(dbPath);

// Create table if not exists
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT
  )
`).run();

// Get all users
app.get("/users", (req, res) => {
  const users = db.prepare("SELECT * FROM users").all();
  res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const stmt = db.prepare("INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)");
  const result = stmt.run(firstName, lastName, email, password);
  res.status(201).json({ id: result.lastInsertRowid, firstName, lastName, email });
});

// Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const stmt = db.prepare("UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?");
  const result = stmt.run(firstName, lastName, email, password, id);

  if (result.changes > 0) {
    res.json({ message: "User updated successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare("DELETE FROM users WHERE id = ?");
  const result = stmt.run(id);

  if (result.changes > 0) {
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
