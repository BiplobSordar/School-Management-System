import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from 'pg';

// Destructure `Pool` from the default import



// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Database connection error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("School Management System API is running...");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});
