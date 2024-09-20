/**
 * Provides a simple API for retrieving random quotes from a predefined list.
 *
 * The API endpoint `/quotes` returns a random quote from the `quotes` array as a JSON response.
 */
import express from "express";
// The cors feature allows for the Ports to be synced correctly.
import cors from "cors";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.use(cors());

let quotes = [];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const quotesFilePath = path.join(__dirname, "quotes.json");

fs.readFile(quotesFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading quotes file:", err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    quotes = jsonData.quotes.map(q => `${q.quote} ~ ${q.name}`);
  } catch (parseErr) {
    console.error("Error parsing quotes file:", parseErr);
  }
});


app.get("/quotes", (req, res) => {
  if (quotes.length === 0) {
    return res.status(500).json({ error: "No quotes available" });
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});