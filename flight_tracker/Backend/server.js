import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Route
app.get("/sample", (req, res) => {
  res.json({ message: "hello!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});