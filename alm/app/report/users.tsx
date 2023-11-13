"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BiChevronDown, BiDownload } from 'react-icons/bi'



const users = () => {

  const [selected, setSelected] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false)

  const handleClick = (index: number) => {
    setSelected(index);
  };

  const handleDownloadClick = () => {
    setShowPopup(!showPopup);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };


  const documentMetrics = [
    { value: 100, label: "Total Document" },
    { value: 45, label: "Signed" },
    { value: 30, label: "Canceled" },
    { value: 3, label: "Pending" },
    { value: 12, label: "Expired" },
    { value: 10, label: "Draft" },
    { value: "2hrs", label: "Avg completion time" },
  ];
  
  return (
    <div className="w-full px-32 py-10 min-h-screen">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[24px]font-bold">Analytics & Report</h1>
          <p className="text-[#4B4B4B] text-sm">Overview of activities</p>
          
        </div>
      <div className='flex flex-col'>
      <div className="flex flex-row mt-20 items-center gap-3">
     
     <p
       className={`text-[16px] pb-6 ${
         selected === 0 ? ' border-b-2 border-green-500 text-green-500 ' : 'cursor-pointer'
       }`}
       
       onClick={() => handleClick(0)}
     >
       Your activity
     </p>
    

   <p
     className={`text-[16px] pb-6 ${
       selected === 1 ? 'border-b-2  border-green-500 text-green-500 ' : 'cursor-pointer'
     }`}
     onClick={() => handleClick(1)}
   >
     Users activities
   </p>
   <p
     className={`text-[16px] pb-6 ${
       selected === 2 ? 'border-b-2 border-green-500 text-green-500' : 'cursor-pointer'
     }`}
     onClick={() => handleClick(2)}
   >
     Document log
   </p>

    </div>
    <span className=' w-full border border-b'></span>
      </div>
      
      <div className='mt-10'>
       <div className='flex justify-between items-center'>
        <div className="justify-start items-center gap-4 flex">
        <p className="text-gray-800 text-[17px] font-normal ">Show report for:</p>
        <div className='w-[127px] h-[35px] px-[18px] py-2 bg-gray-200 rounded-[36px] justify-between items-center flex'>
          <p className='text-gray-800 text-xs font-bold'>2023</p>
          <BiChevronDown clasName='w-4 h-4 relative'/>
        </div>
        </div>  
        <div 
        className='w-[268px] h-[43px] p-3 bg-green-700 rounded-lg justify-center items-center gap-3 inline-flex'
        onClick={handleDownloadClick}
        >
          <p className='text-white text-sm font-medium leading-normal'>Download report</p>
          <BiDownload className='w-6 h-6 relative text-white' />
        </div>    
       </div>
      </div>
     
     
      {/* Popup */}
      {showPopup && (
        <div className="fixed w-full top-0 right-0 bottom-0 bg-opacity-50 bg-gray-800 flex items-center justify-center z-[1000]">
   <div className="border-[5px] bg-white lg:w-[500px] lg:h-[350px] lg:mt-[49px] rounded-lg relative z-[1100]">
            <button
              className="absolute top-2 right-2 text-gray-500 text-xl hover:text-gray-800 z-[1200]"
              onClick={handleCloseClick}
            >
              x
            </button>
            {/* ... (popup content) */}
           
          <div className="lg:w-[449px] lg:h-[266px] mx-auto my-[50px]">
          
                <p className="text-[16px] font-body font-[500] pl-40">Share Document</p>
            

            <div className="lg:w-[412px] h-[24px] mx-auto mt-10  flex flex-row">
              <hr className="lg:w-[195px] my-auto border-[1px] text-[#D7DCE0]" />
              <p className="text-[14px] font-[400] font-body px-[5px] text-[#394455]">or</p>
              <hr className="w-[195px] my-auto border-[1px] text-[#D7DCE0]" />
            </div>

            <div className="lg:flex lg:flex-row lg:w-[449px] justify-center h-[57px] mt-[24px] gap-[35px]">

            <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/sharepoint.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[13px] text-[#59595E] ">Share point</div>

              </div>

              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/google-drive.svg"
                    alt="Logo"
                    width={20}
                    height={17.88909}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[13px] text-[#59595E]">Google drive</div>

              </div>

              <div className="w-[85px] h-[57px]">
                <div>
                  <Image className="mx-auto"
                    src="/images/onedrive.svg"
                    alt="Logo"
                    width={20}
                    height={12.8866}
                  />
                </div>
                <div className="text-[14px] font-body font-[500] mt-[18px] text-[#59595E]">One drive</div>

              </div>

              
            </div>

            <div className=" mx-auto mt-[38px] ml-5">
            <div className='w-[400px] h-[43px] p-3 bg-green-700 rounded-lg justify-center items-center gap-3 inline-flex'>
              <p className='text-white text-sm font-medium leading-normal'>Download report</p>
              <BiDownload className='w-6 h-6 relative text-white' />
              </div> 
            </div>
        </div>
          </div>
        </div>
      )}

      <div className="w-full h-[136px] px-[30px] py-4 mt-10 bg-white rounded-lg shadow border border-zinc-300 flex-col justify-start items-start gap-4 flex">
          <p className='text-center text-gray-800 text-[17px] font-bold'>Document Metrics</p>
          <div className="w-full flex flex-wrap justify-between items-start gap-4">
            {documentMetrics.map((metric, index) => (
              <div key={index} className="w-[105px] h-[67px] flex flex-col justify-start items-center">
                <p className="text-center text-slate-500 text-2xl font-bold">{metric.value}</p>
                <p className="text-center text-zinc-600 text-sm font-normal leading-snug" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>


       <div className="w-full h-[400px] mt-10 relative bg-white rounded-[9px] shadow border border-gray-200">

       <div className="flex justify-between px-[30px] py-4  ">
        <div className="flex flex-col justify-start gap-2">
            <p className=" text-gray-800 text-[18px] font-bold leading-loose">Completed Documents</p>
            <p className=" text-gray-800 text-sm font-normal leading-normal">Total signed, cancelled and expired document trend MoM</p>
        </div>
         <div className="flex gap-[29px] justify-start items-center  ">
          <div className="flex justify-center items-center gap-2 ">
              <span className='w-5 h-5 left-[6.75px] top-[7.61px] bg-green-700 rounded-[1px]'></span>
              <p className='text-gray-800 text-sm font-normal'>Signed</p>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <span className='w-5 h-5 left-[6.75px] top-[7.61px] bg-violet-300 rounded-[1px]'></span>
              <p className='text-gray-800 text-sm font-normal'>Canceled</p>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <span className='w-5 h-5 left-[6.75px] top-[7.61px] bg-pink-600 rounded-[1px]'></span>
              <p className='text-gray-800 text-sm font-normal'>Expired</p>
            </div>
         </div>
       </div>
        
       <div className='pt-2'>
          <Image
              src="/images/users1.svg"
              alt="checked"
              width={1100}
              height={500}
          />
      </div>

       </div>

       <div className='mt-10'>
          <Image
              src="/images/users2.svg"
              alt="checked"
              width={1200}
              height={500}
           
          />
      </div>


   
           
      </div>
  )
}

export default users