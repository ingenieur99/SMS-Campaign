'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/components/logo';

const primaryIcons = [
  { src: '/Button.png', alt: 'Home' },
  { src: 'Vector.png', alt: 'Users' },
  { src: '/Button3.png', alt: 'Settings' },
  { src: '/Button4.png', alt: 'Notifications' },
  { src: '/Button5.png', alt: 'Stats' },
  { src: '/activity.png', alt: 'Stats' },
];

const secondaryIcons = [
  { src: '/ic-outline-direct.png', alt: 'Notifications' },
  { src: '/ic-outline-data.png', alt: 'Stats' },
  { src: '/ic-outline-setting-2.png', alt: 'Stats' },
];

export const Sidebar = () => {
  return (
    <aside className="border border-gray-100 rounded-2xl mt-2 w-[50px] min-h-screen bg-white px-4 py-4 shadow-sm flex flex-col justify-between items-center">
      
      <div className="flex flex-col items-center space-y-4">
        
        <div className="text-2xl font-bold text-[#A47AFF]">
          <Logo />
        </div>

        
        <div className="bg-gray-100 rounded-4xl p-3 flex flex-col items-center gap-2 shadow-sm">
          {primaryIcons.map((icon, index) => (
            <SidebarIcon
              key={index}
              src={icon.src}
              alt={icon.alt}
              isHighlighted={icon.src === 'Vector.png'}
              large={icon.src === 'Button.png'}
            />
          ))}
        </div>

        
        <div className="flex-grow my-40" />

        
        <div className="bg-gray-100 rounded-4xl p-3 flex flex-col items-center gap-2 shadow-sm">
          {secondaryIcons.map((icon, index) => (
            <SidebarIcon key={`bottom-${index}`} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </aside>
  );
};

type SidebarIconProps = {
  src: string;
  alt: string;
  isHighlighted?: boolean;
  large?: boolean;
};

const SidebarIcon = ({ src, alt, isHighlighted = false, large = false }: SidebarIconProps) => {
  return (
    <button
      className={`flex items-center justify-center shadow-sm hover:scale-105 transition-transform rounded-full ${
        isHighlighted ? 'bg-[#775fb0]' : 'bg-white'
      } ${large ? 'w-14 h-14' : 'w-12 h-12'}`}
    >
      <img
        src={src}
        alt={alt}
        width={large ? 28 : 24}
        height={large ? 28 : 24}
        className="object-contain"
      />
    </button>
  );
};
