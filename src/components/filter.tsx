
import React, { useState } from 'react';

export const Filter: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[283px] h-[1027px] bg-white p-2 mt-2 space-y-2 border border-gray-300 rounded-xl">
      <h2 className="text-xl font-semibold">Filters</h2>
      <hr className="border-t border-gray-200" />

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-left border-gray-300 hover:bg-gray-50"
      >
        <h2 className="text-lg font-semibold">Patient</h2>
        <span className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`}>^</span>
      </button>

      {showDetails && (
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-500">Search</label>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A47AFF]"
            />
            <img
              src="/ic-recherche.png"
              alt="Search"
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">Date of Birth</label>
            <input type="date" className="w-full p-2 rounded-xl border border-gray-300" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-500">Gender</label>
            <div className="space-y-2">
              <label className="flex text-sm items-center space-x-2">
                <input type="checkbox" />
                <span>Male</span>
              </label>
              <label className="flex text-sm items-center space-x-2">
                <input type="checkbox" />
                <span>Female</span>
              </label>
            </div>
          </div>
        </div>
      )}

      <hr className="border-t border-gray-200" />

      <div className="text-center space-y-2">
        <select className="w-full px-4 py-2 text-sm font-medium text-left border border-gray-300 hover:bg-gray-50 rounded-xl">
          <option>Type de rendez-vous</option>
        </select>
        <select className="w-full px-4 py-2 text-sm font-medium text-left border border-gray-300 hover:bg-gray-50 rounded-xl">
          <option>Status</option>
        </select>
      </div>
    </div>
  );
};
