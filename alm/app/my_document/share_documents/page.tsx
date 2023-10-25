

import React from 'react'
import Go_back from '../../components/Go_back'
import Notification from '../../components/Notification'
import Proceed_button from '../../components/Proceed_button'
import Preview_Other from '@/app/components/Preview_Other'
import Buttons from "./Index"

const page = () => {
    
    return (
        <div className='mt-[40px] lg:mx-[173px]'>
            <div className='lg:flex justify-between items-center  mb-[14px]'>
                <Go_back />
             <Buttons/>

            </div>
            <Preview_Other />
        </div>

    )
}

export default page


