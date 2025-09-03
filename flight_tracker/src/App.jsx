import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Flights from "./Components/Flights";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </Router>
  );
}

export default App;