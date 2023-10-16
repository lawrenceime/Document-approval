import React from 'react'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'

const success = () => {
  return (
    <div>
      <div className='shadow-lg flex items-center justify-center w-[527px] h-[249px] rounded-[8px]'>
        <div className=' w-[349px] h-[130px]'>
             <div className='w-[50px] h-[50px] mx-auto'>
                <IoIosCheckmarkCircleOutline className='w-[50px] h-[50px] text-[#46A56C]'/>
             </div>
             <div className='w-[188px] h-[28px] text-[24px] font-body font-[400] mx-auto mt-[16px]'>
                Signature saved
             </div>
             <div className='w-[349px] h-[28px] font-body font-[400] text-[16px] mt-[10px]'>
                Your signature has been successfully saved 
             </div>
        </div>
      </div>
    </div> 
  )
}

export default success
