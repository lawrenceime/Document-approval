'use client'

import React, { useState } from 'react';
import Signbar from './signbar';
import Draw from './draw';
import Upload from './upload';
import Saved from './saved'


const Signature = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabs = [
    { label: 'Use name', content: <Signbar/> },
    { label: 'Draw', content: <Draw/> },
    { label: 'Upload', content: <Upload/> },
    { label: 'Saved', content:  <Saved/> },
  ];

  // Check if the active tab index is within the bounds of the tabs array
  if (activeTab < 0 || activeTab >= tabs.length) {
    return null; // Return null if the active tab index is out of bounds
  }

  return (
    <div className="w-[615px] h-[500px] border rounded-[8px] shadow-lg p-6 space-x-6">
        
      <div className='w-[575px] h-[25px] pl-5 mx-auto font-body'>Your Signature</div>

      <div className='w-[575px] h-[66px] mr-[10px] flex items-center  mt-[10px] font-body  space-x-[26px]'>
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={
              index === activeTab
                ? 'cursor-pointer font-bold text-green-500 underline '
                : 'cursor-pointer'
            }
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </span>
        ))}
      </div>
      
      <div className="tab-content mt-6">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Signature;

