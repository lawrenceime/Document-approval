import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    
    <div className='border shadow-md p-4'>
      <div className='flex items-center'>
        <Image
          src="/images/vfd_logo.png" 
          alt="Logo"
          width={50} 
          height={50} 
        />
        <p className='ml-4 text-xl font-light'>Document Approval Tool</p>
      </div>
    </div>
    
  );
}

export default Navbar;

