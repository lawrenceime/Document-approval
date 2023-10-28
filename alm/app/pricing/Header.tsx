import React from 'react'
import PricingHeader from '../components/PricingHeader'
const Header = () => {
    return (
        <div className="  ">
            <div className='lg:flex lg:justify-center lg:items-center mb-[40px]'>
                <PricingHeader>
                    <h1 className='text-[#2C2A3B], font-[Inter] text-[44px] not-italic font-semibold leading-[60px] mb-[24px] mt-[40px] text-center'>Plan & Pricing</h1>
                    <p className=' lg:w-[614px] text-[#2C2A3B] text-center font-[Inter] text-[16px] not-italic font-normal leading-[28px] mx-auto'>Our pricing options are flexible and reasonably priced, and they are designed to fit your needs and budget.</p>
                </PricingHeader>
            </div>

        </div>
    )
}

export default Header