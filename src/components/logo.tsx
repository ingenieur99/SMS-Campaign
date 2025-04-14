
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
      <Image
        src="/logo.png"
        alt="App Logo"
        width={40}
        height={40}
        className="object-contain"
      />
     
    </Link>
  );
};

export default Logo;
