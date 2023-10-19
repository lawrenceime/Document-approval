"use client";

import React, { useState } from "react";
import Image from "next/image";
import Home from '../dashboard/home'



const HomeNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  const tabs = [
    { label: "Home", content: <Home/> },

    { label: "My Documents", content: "content for 2" },

    { label: "Template", content: "content for 3" },

    { label: "Users", content: "content for 4" },

    { label: "Reports", content: "content for 5" },

    { label: "Audit Trail", content: "content for 6" },

    { label: "Pricing", content: "content for 7" },
  ];

  if (activeTab < 0 || activeTab >= tabs.length) {
    return null;
  }

  return (
    <div>
      <div className=" flex flex-row w-full">
        <div className="flex flex-row w-[767px] h-[66px] ml-[173px]">
          <div className="flex items-center justify-center ">
            <Image
              src="/images/vfd_logo.png"
              alt="Logo"
              width={44}
              height={46}
            />
          </div>
          <div className="w-[619px] h-[66px] ml-[104px] space-x-[26px] text-[16px] font-body text-[#2C2A3B] flex items-center justify-center">
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={
                  index === activeTab
                    ? "cursor-pointer font-bold text-green-500 underline "
                    : "cursor-pointer"
                }
                onClick={() => handleTabChange(index)}
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>

        <div className=" flex flex-row items-center justify-end  my-auto mx-auto">
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
      <hr className="w-full" />
      <div className="tab-content mt-6">{tabs[activeTab].content}</div>
    </div>
  );
};

export default HomeNav;
