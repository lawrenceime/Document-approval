import React from 'react'
import Image from 'next/image'
const Notification = () => {
    return (
        <div className='flex justify-start items-center lg:w-[469px]  bg-[#FEF4EA] p-[10px] rounded-[5px] gap-[10px]'>
            <div className=''>
                <Image
                    src="/images/bx-info.svg"
                    alt=""
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <span>
                    <span className='text-[#BF9214] text-[16px] font-[Inter] font-semibold leading-[22px]'>Notice:</span>
                    <span className=' text-[14px] font-[Inter] text-[#6E7191] font-normal leading-[24px]'> 1 action required. please click on the proceed to start.</span>

                </span>
            </div>
        </div>
    )
}

export default Notification