import React from 'react'


const saved = () => {
  return (
    <div>
      <div className='border w-[535px] h-[278px] rounded-[8px] flex items-center justify-center'>
        <div className='  w-[247px] h-[10px] text-[14px] font-body font-[400] text-[#AAAAAA] rounded-[8px]'>You do not have any saved signature</div>
        
      </div>
      <div className='w-[298px] h-[43px] flex flex-row gap-[18px] my-[20px] ml-[238px]'>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#EBEBEB] text-[#59595E] opacity-50'>Cancel</button>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#188E47] text-white opacity-50'>Save</button>
        </div>
    </div>
  )
}

export default saved
