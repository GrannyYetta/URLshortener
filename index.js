import express from "express";
import { connection } from "./db.js";

// initalizing express app
const app = express();

const PORT = 3000 || 5000;

// connecting to the database
connection();

// Express middleware for JSON parsing
app.use(express.json());

app.listen(PORT, () => {
	console.log(`app running on http://localhost:${PORT}`);
});
