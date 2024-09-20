/**
 * Provides a simple API for retrieving random quotes from a predefined list.
 *
 * The API endpoint `/quotes` returns a random quote from the `quotes` array as a JSON response.
 */
import express from "express";
// The cors feature allows for the Ports to be synced correctly.
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

const quotes = [
  "Oh yeah, oohing and ahhing, that's how it always starts, but later there's the running and screaming. ~ Jeff Goldblum",
  "Yeah but your scientists were so preoccupied with whether or not they could they didn't stop to think if they should. ~ Jeff Goldblum",
  "He was a great man. And he was also me. ~ Jeff Goldblum",
  "As soon as you're interested in what is good taste, then you're in bad taste land already. What's comfortable and what represents your life, what's unique and individual about you, that's style. ~ Jeff Goldblum",
  "I, uh, don't think I'm, y'know, so different than your average, y'know, average. ~ Jeff Goldblum",
];


app.get("/quotes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
