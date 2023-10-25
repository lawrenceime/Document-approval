import React from 'react'
import Image from 'next/image'

const Preview_Other = () => {
    return (
        <div className='lg:grid lg:grid-cols-4 '>
            <div className=''>
                <span className='text-[14px] font-[Inter] font-medium leading-[24px] text-[#2C2A3B] mx-[50px]'>
                    page <span className='px-[16px] py-[5px] border mx-[8px] rounded-[8px]'>1</span> of 10
                </span>
                <div className=' mx-[50px] mt-[17px]'>
                    <div>
                        <Image
                            src="/images/imagePrev1.svg"
                            alt=""
                            width={158}
                            height={204.54}
                        />

                    </div>
                    <p className='text-center'> 1</p>
                    <div >
                        <Image
                            src="/images/imagePrev1.svg"
                            alt=""
                            width={158}
                            height={204.54}
                        />

                    </div>
                    <p className='text-center'> 4</p>
                    <div>
                        <Image
                            src="/images/imagePrev1.svg"
                            alt=""
                            width={158}
                            height={204.54}
                        />

                    </div>
                    <p className='text-center'> 6</p>
                </div>

            </div>
            <div className=' bg-[#FAF8FF] col-span-2 px-[29px]'>
                <div className='flex justify-start items-center gap-[16px] mb-[32px]'>
                    <div>
                        <Image
                            src="/images/bxs-file.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <p>Docname.doctype</p>
                </div>

                <div>
                    <Image
                        src="/images/imagePrev2.svg"
                        alt=""
                        width={644}
                        height={833.699}
                    />
                </div>



            </div>
            <div className='  lg:py-[16px] lg:px-[29px]'>
                <div className='flex justify-between items-center'>

                    <p>Document info:</p>

                    <div>
                        <Image
                            src="/images/bx-chevron-up.svg"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </div>

                </div>
                <div className='border-b-2 border-w-[30px] mt-[10px]'></div>

                <div>
                    <div className='flex justify-start items-center lg:w-[255px] py-[16px] gap-[20px]'>
                        <p className='text-[14px] font-[Inter] font-semibold leading-[24px] not-italic text-[#2C2A3B] '>Created by:</p>
                        <p className='text-[14px] font-[Inter] font-normal leading-[24px] not-italic'> Adewale Olusegun</p>
                    </div>
                    <div className='flex justify-start items-center lg:w-[255px] py-[16px] gap-[20px]'>
                        <p className='text-[14px] font-[Inter] font-semibold leading-[24px] not-italic text-[#2C2A3B] '>Expiry date:</p>
                        <p className='text-[14px] font-[Inter] font-normal leading-[24px] not-italic'>12th Sept, 2023</p>
                    </div>
                    <div className='flex justify-start items-center lg:w-[255px] py-[16px] gap-[20px]'>
                        <p className='text-[14px] font-[Inter] font-semibold leading-[24px] not-italic text-[#2C2A3B] '>Recipients</p>
                        <p>5</p>
                    </div>
                    <div className='flex justify-start items-center gap-[28px]  py-[16px]'>
                        <p className='text-[14px] font-[Inter] font-semibold leading-[24px] not-italic text-[#2C2A3B] '>Signatory type:</p>
                        <p className='text-[14px] font-[Inter] font-normal leading-[24px] not-italic  '>Random</p>
                    </div>
                    <div className='flex justify-start items-center gap-[28px]  py-[16px]'>
                        <p className='text-[14px] font-[Inter] font-semibold leading-[24px] not-italic text-[#2C2A3B] '>Status:</p>
                        <div className='bg-[#FFFAE9] lg:w-[80px] lg:py-[2px] lg:pl-[6px] lg:pr-[8px] flex justify-start gap-[6px] items-center rounded-[16px] text-[#BF9214] text-[12px] font-[Inter] font-normal not-italic leading-[18px] ' >
                            <div className='bg-[#BF9214]  w-[8px] h-[8px] rounded-full '></div>
                            <p>Pending</p>
                        </div>
                    </div>
                    <div className='border-b-2 border-w-[30px] mt-[10px]'></div>
                    <div className='flex justify-between items-center border-b-2 mb-[32px] mt-[26px]'>

                        <p className='text-[16px] font-[Inter] font-bold leading-[24px] not-italic'>Recipient:</p>

                        <div>
                            <Image
                                src="/images/bx-chevron-down.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-b-2 mb-[32px]'>

                        <p className='text-[16px] font-[Inter] font-bold leading-[24px] not-italic'>Activity:</p>

                        <div>
                            <Image
                                src="/images/bx-chevron-down.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-b-2'>
                        <div className='flex items-center gap-[8px] '>
                            <p className='text-[16px] font-[Inter] font-bold leading-[24px] not-italic'>Comments:</p>
                            <div className='w-[16px] h-[16px] rounded-full flex justify-center items-center text-[8px] font-[Inter] font-normal bg-[#D1E8DA]'>1</div>
                        </div>


                        <div>
                            <Image
                                src="/images/bx-chevron-down.svg"
                                alt=""
                                width={24}
                                height={24}
                            />
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Preview_Other