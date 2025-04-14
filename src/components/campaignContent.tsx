
import React from 'react';

interface CampaignContentProps {
  value: string;
  onChange: (value: string) => void;
}

export const CampaignContent: React.FC<CampaignContentProps> = ({ value, onChange }) => {
  const characterCount = value.length;
  const messageCount = Math.ceil(characterCount / 160);

  const icons = [
    '/Button Circle Icon.png',
    '/Button Circle Icon1.png',
    '/Button Circle Icon2.png',
    '/Button Circle Icon3.png',
    '/Button Circle Icon4.png',
  ];

  return (
    <div>
      <label className="block text-l font-semibold mb-3">Campaign Content</label>

      
      <div className="relative w-full border border-purple-400 rounded-2xl overflow-hidden bg-white">
  <textarea
    className="w-full p-2 pr-10 pb-10 bg-transparent resize-none outline-none"
    rows={3}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />


      
        <div className="absolute bottom-2 left-2 flex space-x-4 mb-1">
          {icons.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Icon ${index + 1}`}
              className="w-3 h-3 cursor-pointer opacity-70 hover:opacity-100"
            />
          ))}
        </div>
      </div>

  
      <div className="text-left text-xs text-gray-500 mt-1">
        {characterCount} Characters | {messageCount} message{messageCount > 1 ? 's' : ''}
      </div>
    </div>
  );
};
