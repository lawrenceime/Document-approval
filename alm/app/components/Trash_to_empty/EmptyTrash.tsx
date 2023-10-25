import React from 'react'
import Image from 'next/image'
const EmptyTrash = () => {
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='text-center '>
                <div className='flex justify-center'>
                    <Image
                        src="/images/empty.svg"
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <div className=' text-center  w-[243px]'>
                    <p className='text-[18px] font-[Inter] font-bold leading-[32px] text-[#2C2A3B] mb-[12px] mt-'>No document</p>
                    <p className=' lg-w-[24px] h-[41px] text-[14px] font-[Inter] font-bold leading-[22px] text-[#59595E] text-center'>You do not have any pending document to approve.</p>
                </div>
            </div>


        </div>
    )
}

export default EmptyTrash