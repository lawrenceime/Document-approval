import React from 'react'
import Go_back from '../Trash-Document/Go_back'
import Notification from './Notification'
import Proceed_button from './Proceed_button'
const index = () => {
    return (
        <div className='lg:flex justify-between items-center lg:mx[173px]'>
            <Go_back />
            <Notification />
            <Proceed_button text="Proceed" />
        </div>
    )
}

export default index