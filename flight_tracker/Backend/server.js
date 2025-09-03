import express from "express";
import cors from "cors";
import flights from "../src/assets/mockAPI.js";

const app = express();
app.use(cors());
app.use(express.json());

// 🔎 Search flights: case-insensitive, partial matches
app.post("/flights", (req, res) => {
  const { departure, arrival } = req.body;

  console.log("🔎 Search criteria:", req.body);

  const result = flights.filter((f) => {
    const depMatch =
      !departure ||
      f.origin.city.toLowerCase().includes(departure.toLowerCase());
    const arrMatch =
      !arrival ||
      f.destination.city.toLowerCase().includes(arrival.toLowerCase());

    return depMatch && arrMatch;
  });

  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));