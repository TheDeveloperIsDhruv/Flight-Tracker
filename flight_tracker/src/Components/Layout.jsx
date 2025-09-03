import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [dep, getDep] = useState("");
  const [arr, getArr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      departure: dep,
      arrival: arr,
    };

    // Pass data to flights page
    navigate("/flights", { state: formData });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-slate-900 to-black text-xl">
      <div className="w-full max-w-lg p-8 rounded-3xl shadow-2xl border border-white
                      bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <h1 className="text-4xl font-extrabold text-center text-slate-800">✈️ Flight Tracker</h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* From */}
          <div>
            <label className="block text-slate-700 font-semibold">From 🛫</label>
            <input
              type="text"
              value={dep}
              placeholder="Enter Departure City"
              className="w-full rounded-xl px-4 py-3 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => getDep(e.target.value)}
            />
          </div>

          {/* To */}
          <div>
            <label className="block text-slate-700 font-semibold">To 🛬</label>
            <input
              type="text"
              value={arr}
              placeholder="Enter Destination City"
              className="w-full rounded-xl px-4 py-3 border border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => getArr(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-2xl font-bold text-slate-800 
                       bg-gradient-to-r from-white to-blue-100 shadow-md hover:scale-105 transition-transform"
          >
            Search Flights ✈️
          </button>
        </form>
      </div>
    </div>
  );
};

export default Layout;