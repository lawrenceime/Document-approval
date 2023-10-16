import React from 'react'
import {PiUploadSimpleFill} from 'react-icons/pi'

const upload = () => {
  return (
    <div>
      <div className='border w-[535px] h-[278px] flex items-center justify-center '>
        <div className='w-[228px] h-[110px]'>
            <div className='w-[161px] h-[50px] mx-auto '>
                <div className='w-[28px] h-[28px] mx-auto text-[#188E47]'><PiUploadSimpleFill/></div>
                <p className='w-[161px] h-[10px] text-[14px] font-[600] pt-[10px]'>Upload signature image</p>
            </div>
            <p className='px-[100px] font-[400] text-[14px] font-body pt-3'>or</p>
            <div className='w-[228px] h-[10px] text-[14px] font-body font-[400] text-[#AAAAAA] pt-[16px]'>Drag and drop your signature here</div>
        </div>
       
      </div>
      <div className='w-[298px] h-[43px] flex flex-row gap-[18px] my-[20px] ml-[238px]'>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#EBEBEB] text-[#59595E]'>Cancel</button>
            <button className='w-[140px] h-[43px] p-[12px] font-body text-[14px] font-[500] rounded-[8px] bg-[#188E47] text-white'>Save</button>
        </div>
    </div>
  )
}

export default upload
