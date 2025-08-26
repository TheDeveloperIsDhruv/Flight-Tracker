import React from "react";

const Layout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-slate-900 to-white px-4">
      <div
        className="w-full max-w-lg p-8 rounded-3xl shadow-2xl border border-white
                   bg-gradient-to-br from-white via-slate-50 to-blue-50
                   transition-all duration-300 ease-in-out
                   hover:scale-[1.01]   text-xl"
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-slate-800 tracking-tight">
          ✈️ Flight Tracker
        </h1>
        <p className="text-center text-slate-500 mt-2 text-md">
          Search and track your flights with ease
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* From */}
          <div className="space-y-2">
            <label className="block text-slate-700 font-semibold " htmlFor="from">
              From 🛫
            </label>
            <input
              id="from"
              type="text"
              placeholder="Enter Departure City"
              className="w-full rounded-xl bg-white px-4 py-3 text-slate-900  border border-gray-300 
                         focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300
                         hover:border-cyan-400"
            />
          </div>

          {/* To */}
          <div className="space-y-2">
            <label className="block text-slate-700 font-semibold " htmlFor="to">
              Destination 🛬
            </label>
            <input
              id="to"
              type="text"
              placeholder="Enter Destination City"
              className="w-full rounded-xl bg-white px-4 py-3 text-slate-900  border border-gray-300 
                         focus:outline-none focus:ring-1 focus:ring-green-400 transition-all duration-300
                         hover:border-cyan-400"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-slate-700 font-semibold">Departure</label>
              <input
                type="date"
                className="w-full rounded-xl bg-white px-4 py-3 text-slate-900  border border-gray-300 
                           focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all duration-300
                           hover:border-cyan-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-slate-700 font-semibold">Arrival</label>
              <input
                type="date"
                className="w-full rounded-xl bg-white px-4 py-3 text-slate-900  border border-gray-300 
                           focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-300
                           hover:border-cyan-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 rounded-2xl font-bold text-slate-800 
                        bg-gradient-to-r from-white to-blue-100 
                        shadow-lg shadow-black
                        hover:shadow-xl hover:shadow-black-400/40
                        active:scale-95
                        transition-all duration-300"
            >
              Track Flight ✈️
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Layout;