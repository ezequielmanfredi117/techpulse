import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { UserWidget } from './UserWidget';

const Navbar = () => {

  return (
    <nav className="bg bg-gradientStart p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/home" className="text-white text-2xl flex font-bold">
            Tech Pulse
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <Link href="/products" className="text-white">
            Products
          </Link>
          <UserWidget />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
