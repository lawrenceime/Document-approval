'use client'

import React from 'react'

import Image from 'next/image'
interface Props {
    amount?: string
    plan?: string
    bill?: string
    children?: React.ReactNode
    className?: string
    src?: string
    rating?: string
}
const PricingCard = ({ amount, plan, bill, children, className, src, rating }: Props) => {
    return (
        <div className={`lg:w-[384px] px-[32px] pt-[40px] pb-0 rounded-[16px] border border-#EAECF0 shadow-xl ${className}`}>
            
            <h1 className='text-[#2C2A3B], font-[Inter] text-[42px] not-italic font-semibold leading-[60px] mb-[16px] mt-[40px] text-center'>{amount}</h1>
            <p className='text-[#2C2A3B], font-[Inter] text-[20px] not-italic font-semibold leading-[30px] text-center mx-auto'>{plan}</p>
            <p className='text-[#AAA)] font-[Inter] text-[16px] not-italic font-normal leading-[24px] text-center mb-[32px] mx-auto'>{bill}</p>
            <div>{children}</div>

           
        </div>
    )
}

export default PricingCard