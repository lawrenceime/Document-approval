'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const HomeNav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <nav className="w-full ">
      <div className="lg:ml-[173px] flex ">
        <div>
          <Link href="/">
            <span className='items-center'
              onClick={() => handleLinkClick('/')}>
              <Image
                src="/images/vfd_logo.png"
                alt="Logo"
                width={44}
                height={46}
              />
            </span>
          </Link>
        </div>

        <div className=' lg:flex lg:flex-row lg:space-x-[26px] lg:items-center'>
          <div className='ml-[104px]' >
            <Link href="/">
              <span className={`text-[#2C2A3B] ${activeLink === '/' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/')}>
                Home
              </span>
            </Link>
          </div>

          <div>
            <Link href="/my_document">
              <span className={`text-[#2C2A3B] ${activeLink === '/my-documents' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/my_document')}>
                My Documents
              </span>
            </Link>
          </div>

          <div>
            <Link href="/template">
              <span className={`text-[#2C2A3B] ${activeLink === '/template' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/template')}>
                Template
              </span>
            </Link>
          </div>

          <div>
            <Link href="/user">
              <span className={`text-[#2C2A3B] ${activeLink === '/users' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/user')}>
                Users
              </span>
            </Link>
          </div>

          <div>
            <Link href="/report">
              <span className={`text-[#2C2A3B] ${activeLink === '/reports' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/report')}>
                Reports
              </span>
            </Link>
          </div>

          <div>
            <Link href="/audit">
              <span className={`text-[#2C2A3B] ${activeLink === '/audit-trail' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/audit')}>
                Audit Trail
              </span>
            </Link>
          </div>

          <div>
            <Link href="/pricing">
              <span className={`text-[#2C2A3B] ${activeLink === '/pricing' ? 'text-green-800 underline underline-offset-[17px]' : ''}`}
                onClick={() => handleLinkClick('/pricing')}>
                Pricing
              </span>
            </Link>
          </div>
        </div>


        <div className=" flex  mx-auto space-x-[10px] ">
          <Image
            src="/images/notification.svg"
            alt="Logo"
            width={38}
            height={38}
          />

          <Image src="/images/person.svg" alt="Logo" width={40} height={40} />

          <Image
            src="/images/bx-chevron-down.svg"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
      </div>
      <hr className='w-full' />
    </nav>
  );
};

export default HomeNav;
