import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


// Route
app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
  
});

let flight_data=[];

app.post("/flights",(req,res)=>{
  const flight=req.body;
  console.log("✈️ Received Data:", req.body);
  res.json({message: "Flight data received successfully!" });
  flight_data.push(flight);
  
})

app.post("/flight/list",(req,res)=>{
  res.json(flight_data);
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});