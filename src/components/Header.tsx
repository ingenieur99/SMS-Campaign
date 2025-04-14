
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="rounded-xl mb-2 w-full h-[136px] bg-white p-4 flex justify-between items-center shadow-md border-b border-gray-300">
      <div className="flex space-x-4">
       
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border">
          <div className="bg-gray-800 text-white rounded-full p-4">
            <img src="/sms.png" alt="Credits" className="w-4 h-4" />
          </div>
          <div className="ml-3 mr-2 text-sm">
            <p className="text-gray-500">My Credits</p>
            <p className="font-semibold text-gray-800">
              15018 <span className="text-sm">SMS</span>
            </p>
          </div>
          <div className="ml-auto bg-[#A47AFF] text-white rounded-full w-11 h-11 flex items-center justify-center text-m font-bold">+</div>
        </div>

     
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
          <div className="bg-green-100 text-green-600 rounded-full p-4">
            <img src="/Vector2.png" alt="Revenue" className="w-4 h-4" />
          </div>
          <div className="ml-3 mr-2 text-sm">
            <p className="text-gray-500">Revenue</p>
            <p className="font-semibold text-gray-800">
              32.018.00 <span className="text-sm">TND</span>
            </p>
          </div>

          <div className="ml-auto bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>

  
      <div className="flex space-x-4 gap-3">
        <button className="relative p-4 rounded-full bg-gray-200 hover:bg-gray-300">
          <span role="img" aria-label="notification" className="text-l">🔔</span>
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
            1
          </span>
        </button>

        <button className="flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#8761df] to-[#E3D7FF]">
            <img src="/Avatar Img.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>

          <div className="text-left">
            <p className="text-xs text-gray-500 font-medium">Hello <span className="inline-block">👋</span></p>
            <p className="text-sm font-semibold text-gray-800 -mt-1">Hayfa</p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
