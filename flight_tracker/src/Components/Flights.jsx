import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Flights = () => {
  const { state: searchParams } = useLocation(); // {departure, arrival}
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await axios.post("http://localhost:3000/flights", searchParams);
        console.log("✅ Filtered flights:", res.data);
        setFlights(res.data);
      } catch (err) {
        console.error("❌ Error fetching flights:", err);
      }
    };

    if (searchParams) fetchFlights();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-blue-300 to-blue-500">
      <h2 className="text-center font-bold text-6xl text-white py-10">Available Flights</h2>
      <div className="flex justify-center px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-2xl">
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white backdrop-blur-xl  shadow-xl shadow-black
                           hover:scale-105 transition-transform"
              >
                <h1 className="font-bold text-4xl text-center text-gray-900 mb-4">{flight.airline}</h1>
                <div className="flex justify-center items-center gap-6 text-3xl text-gray-800">
                  <span>{flight.origin.city}</span>
                  <span>✈️</span>
                  <span>{flight.destination.city}</span>
                </div>
                <div className="text-center  mt-4 text-gray-700">
                  <p><strong>Departure:</strong> {flight.departure.scheduledTime}</p>
                  <p><strong>Arrival:</strong> {flight.arrival.scheduledTime}</p>
                  <p><strong>Status:</strong> {flight.status}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-6 rounded-2xl  bg-white backdrop-blur-xl  shadow-xl shadow-black
                           hover:scale-105 transition-transform text-black text-5xl col-span-full text-center">❌ No matching flights</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Flights;