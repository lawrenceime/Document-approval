'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Trash = () => {
    const router = useRouter()
    return (
        <div>


            <div className='flex justify-start items-center lg:w-full  bg-[#FEF4EA] p-[10px] rounded-[5px] '>
                <div className=''>
                    <Image
                        src="/images/bx-info.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                </div>
                <div className=''>
                    <span>
                        <span className='text-[#BF9214] text-[16px] font-[Inter] font-semibold leading-[22px]'>Notice:</span>
                        <span className='ml-2 text-[16px] font-[Inter] font-normal leading-[22px]'>Any documents that remain in the Trash for over 30 days will be automatically deleted.</span>
                        <span className='text-[#188E47] text-[16px] font-[Inter] font-medium leading-[22px] ml-1 cursor-pointer' onClick={() => router.push('/my_document/empty_trash')}>  Empty Trash now</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Trash