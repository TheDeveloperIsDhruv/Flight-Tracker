import React from "react";
import { useState } from "react";
import flights from "../assets/mockAPI";
import axios from "axios";


const Flight=()=>{

        const handleData=async(e)=>{
            try{
                const res= await axios.fetch('http://localhost:3000/flight/list');
                console.log("✅ Response",res.data);
            }
            catch(err){
                console.error("❌ Error sending data:", err);
            }
        }
        return(
            <div className="bg-gradient-to-r from-gray-900 via-blue-700 to-blue-300">
                <h2 className="text-center font-bold text-8xl text-white">Flight List</h2>
                <div className="flex aligns-items-center justify-center mt-11">
                <ul className="grid grid-cols-3  gap-11 ">
                    {flights.map((flight, index) => (
                        <div className="border-3 p-8 bg-gradient-to-r from-blue-600 to-white rounded-xl  hover:scale-104  ">
                            <h1 className="font-bold text-center text-3xl">{flight.airline}</h1>
                            <div className="flex mt-4 justify-center items-center gap-8 text-xl">
                                <h1>{flight.origin.city}</h1><span>✈️</span><h1>{flight.destination.city}</h1>
                            </div>  

                        </div>
                        
                    ))
                    }
                </ul>
                </div>
            </div>
        )
}
export default Flight;