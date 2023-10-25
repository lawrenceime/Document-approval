'use client'
import React from 'react'
import Button from '../../components/Button'
import { useRouter } from 'next/navigation'
const Index = () => {
   const router = useRouter()
  return (
 
    <div className='lg:flex lg:justify-between lg:items-center mb-[15px]'>
    <div className='lg:flex  lg:justify-start lg:items-center lg:gap-[16px] '>
        <Button text='Share document' className='text-[#fff] bg-[#188E47] py-[7px]' />
        <Button text="Delete" src='/images/bx-trash.svg' className='bg-[#F8E9EA] text-[#C04C50]' onClick={()=>router.push('/my_document')}/>
    </div>
</div>
  )
}

export default Index