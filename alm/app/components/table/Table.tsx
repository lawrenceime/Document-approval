'use client'
import React from 'react'
import { tableData } from "./Constant"
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Table = () => {
    const [documents, setDocuments] = useState(tableData)
    const [showHeader, setShowHeader] = useState(true)


    const router = useRouter()

    return (
        <>

            <table className=' lg:w-full mt-[41px] px-[20px] border-r-2 border-l-2 '>
                <thead className='lg:px-[20px]'>
                    <tr className="bg-[#F5F5F5] py-[12px] px-[24px] gap-[24px]">
                        <th className=" rounded-t-md lg:w-[368px] text-left font-semibold font-[Inter] text-[#000] text-[16px]">
                            <div className='flex justify-start items-center gap-[12px] pl-5'>
                                <input type="checkbox" onChange={() => router.push('/my_document/checked_documents')} />
                                <p className='text-[#59595E] text-[14px] font-[Inter] not-italic font-medium'>Document name </p>
                            </div>

                        </th>
                        <th className=" border-gray-300 text-center font-normal w-[167px] h-[44px]">
                            <span className='text-[#59595E]  not-italic font-mediumfont-[Inter] text-[14px]   '>Created by</span></th>
                        <th className=" border-gray-300 text-center font-normal  lg:w-[167px]">
                            <span className='text-[#59595E] text-[14px] font-[Inter] not-italic font-medium'>Folder</span></th>

                        <th className=" border-gray-300 text-center font-normal lg:w-[152px]">
                            <span className='text-[#59595E] text-[14px] font-[Inter] not-italic font-medium'>Recipient </span></th>

                        <th className=" border-gray-300 text-center font-normal lg:w-[126px]">
                            <span className='text-[#59595E] text-[14px] font-[Inter] not-italic font-medium'>Status</span></th>

                        <th className='lg:w-[116px]'></th>
                    </tr>

                </thead>
                <tbody className='text-center border-b-2 '>
                    {documents.map((data, index) => <tr className="pb-5 space-x-6 border-b-2" key={index}>
                        <td>
                            <div className='flex  justify-start items-center gap-[12px] pl-5' >
                                <input type="checkbox"
                                    onChange={() => router.push('/my_document/checked_documents')}
                                />
                                <div>
                                    <p className='text-[#2C2A3B] text-[14px] font-[Inter] not-italic font-bold'>{data.name}</p>
                                    <p className="text-[#2C2A3B] text-[13px] font-[Inter] not-italic font-[300] leading-[20px]">{data.date}</p>
                                </div>

                            </div>
                        </td>
                        <td>
                            <p className="text-[#2C2A3B] text-[14px] font-[Inter] not-italic font-medium leading-[20px]">
                                {data.created_by}
                            </p>
                        </td>
                        <td>
                            <p className="text-[#2C2A3B] text-[14px] font-[Inter] not-italic font-medium leading-[20px]"> {data.folder}</p>


                        </td>

                        <td className=''>

                            <div className=' relative flex ml-24 lg:w-[152px]' >

                                <Image
                                    src="/images/Avatar.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className='h-12 w-12 object-cover rounded-full ring-2 ring-white ms-[-15px]'
                                />
                                <Image
                                    src="/images/Avatar.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className='h-12 w-12 object-cover rounded-full ring-2 ring-white ms-[-15px]'
                                />
                                <Image
                                    src="/images/Avatar.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className='h-12 w-12 object-cover rounded-full ring-2 ring-white ms-[-15px] cursor-pointer'
                                />

                            </div>


                        </td>
                        <td className=' '>

                            <div className={`${data.status.type === "Expired" ? "bg-[#FEF3F2] lg:w-[80px] lg:py-[2px] lg:pl-[6px] lg:pr-[8px] flex justify-start gap-[6px] items-center rounded-[16px] text-[#B42318] text-[12px] font-[Inter] font-normal not-italic leading-[18px]  " :
                                data.status.type === "Rejected" ? "bg-[#F2F4F7]lg:w-[80px] lg:py-[2px] lg:pl-[6px] lg:pr-[8px] flex justify-start gap-[6px] items-center rounded-[16px] text-[#344054] text-[12px] font-[Inter] font-normal not-italic leading-[18px] "
                                    : data.status.type === "Signed" ? "bg-[#E8F4ED] lg:w-[80px] lg:py-[2px] lg:pl-[6px] lg:pr-[8px] flex justify-start gap-[6px] items-center rounded-[16px] text-[#188E47] text-[12px] font-[Inter] font-normal not-italic leading-[18px] "
                                        : data.status.type === "Pending" ? "bg-[#FFFAE9] lg:w-[80px] lg:py-[2px] lg:pl-[6px] lg:pr-[8px] flex justify-start gap-[6px] items-center rounded-[16px] text-[#BF9214] text-[12px] font-[Inter] font-normal not-italic leading-[18px] " : ""


                                }`} >
                                <div className={`${data.status.type === "Expired" ? "bg-[#F04438]  w-[8px] h-[8px] rounded-full " :
                                    data.status.type === "Rejected" ? "bg-[#667085] w-[8px] h-[8px] rounded-full "
                                        : data.status.type === "Signed" ? "bg-[#188E47]  w-[8px] h-[8px] rounded-full "
                                            : data.status.type === "Pending" ? "bg-[#BF9214]  w-[8px] h-[8px] rounded-full " : ""}`} >

                                </div>
                                <p>
                                    {data.status.type}
                                </p>

                            </div>
                        </td>
                        <td className='lg:w-[152px]'>
                            <Image
                                src="/images/bx-chevron-right.svg"
                                alt=""
                                width={24}
                                height={24}
                                className='ml-[50px] cursor-pointer'
                                onClick={() => router.push('my_document/share_documents')}

                            />
                        </td>
                    </tr>)}

                </tbody>

            </table>
        </>
    )
}

export default Table