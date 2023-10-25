
'use client'
import React from 'react'
import { tableData } from "./table/Constant"
import { useState } from 'react'
import Image from 'next/image'
const TrashTable = () => {
    const [documents, setDocuments] = useState(tableData)
    return (
        <table className=' lg:w-full mt-[41px] px-[20px] border-r-2 border-l-2 '>
            <thead className='lg:px-[20px]'>
                <tr className="bg-[#F5F5F5] py-[12px] px-[24px] gap-[24px]">
                    <th className=" rounded-t-md lg:w-[368px] text-left font-semibold font-[Inter] text-[#000] text-[16px]">
                        <div className='flex justify-start items-center gap-[12px] pl-5'>
                            <input type="checkbox" />
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
                            <input type="checkbox" />
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
                    <td className='lg:w-[152px]'>
                        <div className='flex px-10 '>
                            <div>
                                <Image
                                    src="/images/bx-undo.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className='ml-[50px]'
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/trash-2.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className='ml-[50px]'
                                />
                            </div>


                        </div>

                    </td>
                </tr>)}

            </tbody>

        </table>
    )
}

export default TrashTable