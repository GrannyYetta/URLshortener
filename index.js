import express from "express";
import { connection } from "./db.js";

const app = express();

const PORT = 3000 || 5000;

connection();

app.use(express.json());

app.listen(PORT, () => {
	console.log(`app running on http://localhost:${PORT}`);
});
