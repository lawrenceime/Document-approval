
'use client'
import React from 'react'
import Image from 'next/image'

const Go_back = () => {
    return (
        <div className='flex justify-start items-center gap-[8px]'>
            <div>
                <Image
                    src="/images/bx-left-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                />
            </div>
            <div>
                <p className=' text-[#565659] text-[14px] font-[Inter] font-medium'> Back</p>
            </div>
        </div>
    )
}

export default Go_back