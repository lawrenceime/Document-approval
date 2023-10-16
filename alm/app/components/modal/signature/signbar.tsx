import React from 'react'

const signbar = () => {
  return (
    <div>
      <div className='border w-[535px] h-[278px] rounded-[8px] mt-[14px]'>
        <div className=' border w-[499px] h-[40px] pl-[8px] text-[#2b293b] text-[14px]font-[400] py-[8px] rounded-[4px] ml-[18px] mt-[14px] '> Bolanle Bolanle </div>
        <div className='w-[499px] h-[100px] mx-auto mt-[9px] space-x-[8px] flex flex-row'>
            <button className='w-[245px] h-[100px] bg-[#F5F5F5] font-wallpoet'>Bolanle Bolanle</button>
            <button className='w-[245px] h-[100px] bg-[#F5F5F5] font-pacifico '>Bolanle Bolanle</button>
        </div>
        <div className='w-[499px] h-[100px] mx-auto mt-[9px] space-x-[8px] flex flex-row'>
            <button className='w-[245px] h-[100px] bg-[#F5F5F5] font-robotomono'>Bolanle Bolanle</button>
            <button className='w-[245px] h-[100px] bg-[#F5F5F5] font-serif'>Bolanle Bolanle</button>
        </div>
        <div className='w-[298px] h-[43px] flex flex-row gap-[18px] my-[20px] ml-[238px]'>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#EBEBEB] text-[#59595E]'>Cancel</button>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#188E47] text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default signbar
