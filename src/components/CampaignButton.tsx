import React from 'react';

interface CampaignButtonProps {
  text: string;
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: string;
  onClick?: () => void;
}

const buttonStyles: Record<'primary' | 'outline' | 'ghost', string> = {
  primary: 'bg-[#A47AFF] text-white hover:bg-[#8c61f0]',
  outline: 'border border-[#A47AFF] text-[#A47AFF] hover:bg-[#f4f0ff]',
  ghost: 'bg-[#f0f0f5] text-gray-800 hover:bg-[#e0e0eb]',
};

export const CampaignButton: React.FC<CampaignButtonProps> = ({
  text,
  variant = 'primary',
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${buttonStyles[variant]}`}
    >
      <span>{text}</span>
      {icon && (
        <img src={icon} alt="" className="w-4 h-4 object-contain" />
      )}
    </button>
  );
};
