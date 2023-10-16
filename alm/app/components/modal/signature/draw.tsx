import React from 'react'

const draw = () => {
  return (
    <div>
        <div className='border w-[535px] h-[278px] rounded-[8px] mt-[14px]'>
            <div className='w-[500px] h-[252px] mx-auto mt-[13px]'>
            <div className='flex flex-row w-[173px] h-[26px] ml-[327px] gap-[48px]'>
                <div className='flex flex-row gap-[10px]'>
                <div className='w-[16px] h-[16px] rounded-[3px] bg-black'></div>
                <div className='w-[16px] h-[16px] rounded-[3px] bg-[#F60009]'></div>
                <div className='w-[16px] h-[16px] rounded-[3px] bg-[#2C6EEC]'></div>
                <div className='w-[16px] h-[16px] rounded-[3px] bg-[#188E47]'></div>
                </div>
                <div className='w-[31px] h-[26px] fomt-body font-[500] text-[12px]'>Undo</div>
            </div>
            <div className='w-[500px] h-[211px] rounded-[8px] mt-[15px] mx-auto  bg-[#F5F5F5] flex items-center justify-center font-body text-[14px] font-[400]text-[#AAAAAA]'> Draw here </div>
            </div>
            <div className='w-[298px] h-[43px] flex flex-row gap-[18px] my-[25px] ml-[238px]'>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#EBEBEB] text-[#59595E]'>Cancel</button>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#188E47] text-white'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default draw
