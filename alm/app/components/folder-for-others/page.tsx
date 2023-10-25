import React from 'react'
import Go_back from '../Go_back'
import Preview from "../Preview"
import Proceed_button from '../Proceed_button'
const page = () => {
    return (
        <div className=''>
            <div className='flex justify-between items-center mb-[15px]'>
                <Go_back />
                <div className='flex items-center'>
                    <Proceed_button text='Share document' className='text-[#fff]' />

                </div>
            </div>

            <Preview />

        </div>
    )
}

export default page