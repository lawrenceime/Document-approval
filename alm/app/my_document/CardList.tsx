'use client'

import React from 'react'
import Card from '../components/Card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const CardList = () => {
    const router = useRouter()
    return (
        <div className="lg:flex  lg:justify-betwwen  gap-[15px] mt-[41px]  lg:items-center ">
            <Card className='flex justify-between items-start bg-[#FAF8FF] border border-[#EAECF0] py-[15px] px-[16px] gap-[12px]'>
                <div className='sm-w-[252px] lg:w-[252px] ' >
                    <p className='text-[14px]  font-bold font-[Inter] leading-4 not-italic text-[#353F50] mb-[12px]'>Create new document</p>
                    <p className='text-[12px] text-[#848F9F] font-normal leading-4 not-italic'>Create a new document from scratch.</p>
                </div>
                <div>
                    <Image
                        src="/images/bxs-file.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                </div>
            </Card>
            <Card className='flex justify-between items-start bg-[#FEF4EA] border-dashed border-[#7F91A8] py-[15px] px-[16px] gap-[12px]'>
                <div className=' lg:w-[252px]' >
                    <p className='text-[14px]  font-bold font-[Inter] leading-4 not-italic text-[#353F50] mb-[12px]'>Click to upload</p>
                    <p className='text-[12px] text-[#848F9F] font-normal leading-4 not-italic'>Accepted file: word, pptx, pdf, jpeg, png</p>
                </div>
                <div className='shrink-0'>
                    <Image
                        src="/images/bx-upload.svg"
                        alt="Upload"
                        width={24}
                        height={24}
                    />
                </div>
            </Card>
            <Card className='flex justify-between items-start bg-[#FCFCFC] border border-[#EAECF0] py-[15px] px-[16px] gap-[12px]'>
                <div className='sm-w-[252px] lg:w[252px]' >
                    <div className='flex  justify-start items-center mb-[5px] shrink-0'>
                        <Image
                            src="/images/bxs-trash.svg"
                            alt="Trash"
                            width={24}
                            height={24}
                        />
                        <div>
                            <p className='text-[14px]  font-bold font-[Inter] not-italic text-[#353F50] '>Trash</p>
                        </div>


                    </div>
                    <p className='text-[12px] text-[#848F9F] font-normal leading-4 not-italic md:w-[252px] mb-[15px]'>Documents you delete are temporarily stored in trash.</p>
                </div>
                <div className='shrink-0'>
                    <Image
                        src="/images/bx-right-arrow.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                        onClick={() => router.push('/my_document/trashed_documents')}
                        className='cursor-pointer'
                    />
                </div>
            </Card>
        </div>
    )
}

export default CardList