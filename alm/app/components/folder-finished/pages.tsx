import React from 'react'
import Go_back from '../Go_back'
import Preview_Other from "../Preview_Other"
import Proceed_button from '../Proceed_button'
import Button from '../Button'
const page = () => {
    return (
        <div className=''>
            <div className='lg:flex lg:justify-between lg:items-center mb-[15px]'>
                <Go_back />
                <div className='lg:flex lg:items-center lg:gap-[16px] space-y-[10px]'>
                    <Button text='Share document' className='text-[#fff] bg-[#188E47] ' />
                    <Button text="Delete" src='/images/bx-trash.svg' className='bg-[#F8E9EA] text-[#C04C50]' />
                </div>
            </div>

            <Preview_Other />

        </div>
    )
}

export default page