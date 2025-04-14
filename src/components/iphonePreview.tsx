import React from 'react';

interface IphonePreviewProps {
  content?: string;
}

export const IphonePreview: React.FC<IphonePreviewProps> = ({ content }) => {
  const renderContentWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) =>
      urlRegex.test(part) ? (
        <span key={index} className="text-blue-600 underline break-all">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  return (
    <div className="w-[270px] h-[531px] rounded-[40px] border-[10px] border-black relative overflow-hidden shadow-xl bg-gradient-to-b from-purple-300 to-green-200 mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="w-12 h-1 bg-gray-700 rounded"></div>
      </div>

      <div className="relative z-0 w-full h-full px-4 pt-14 text-white font-sans">
        <div className="text-center mt-4">
          <div className="text-5xl font-light leading-none">11:56</div>
          <div className="text-sm mt-1">July 6, Wednesday</div>
        </div>

        {content && (
          <div className="mt-10 bg-white bg-opacity-90 rounded-xl p-3 text-sm text-black shadow-md">
            <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
              <span className="font-medium">arkan.tn</span>
              <span className="text-gray-400">Now</span>
            </div>
            <p className="whitespace-pre-wrap">{renderContentWithLinks(content)}</p>
          </div>
        )}
      </div>
    </div>
  );
};
