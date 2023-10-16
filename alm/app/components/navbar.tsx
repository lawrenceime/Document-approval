
import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-10 p-4 flex items-center justify-between shadow-md">
      <div className='flex items-center'>
        <Image
          src="/images/vfd_logo.png" 
          alt="Logo"
          width={50} 
          height={50} 
        />
        <p className='ml-4 text-xl font-light'>Document Approval Tool</p>
      </div>
      {/* Other navbar content */}
    </nav>
  );
};

export default Navbar;
