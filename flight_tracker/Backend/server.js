import express from "express";
import cors from "cors";
import flights from "../src/assets/mockAPI";

const app = express();

app.use(cors());
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
  
});

app.post("/flights",(req,res)=>{
  const {dep,arr,DepDate,ArrDate}=req.body;
  console.log("✈️ Received Data:", req.body);
  res.json({message: "Flight data received successfully!" });

})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});