'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button';
import { useRouter } from 'next/navigation';

export const TrashBar = () => {
    const router = useRouter()
    return (
        <div className='lg:w-full bg-[#666DB2] rounded-t-[8px] h-[67px] py-[16px] px-[24px] flex justify-between items-center mt-[41px] mb-[-40px]'>
            <div className='flex justify-start items-center gap-[16px]'>
                <div>
                    <Image
                        src="/images/Close.svg"
                        alt=""
                        width={24}
                        height={24}
                        onClick={() => router.push('/my_document')}
                    />
                </div>
                <div>
                    <span className='text-[#FFF] text-[14px] font-[Inter] font-semibold leading-[16px]' > 4 Selected</span>
                </div>

            </div>
            <div className='flex justify-end items-center gap-[16px]'>
                <Button src="/images/bx-undo.svg" text="Restore" className='bg-[#EBEBEB] ' />
                <Button src="/images/bx-trash.svg" text="Delete" className='bg-[#F8E9EA]' />


            </div>

        </div>
    )
}
