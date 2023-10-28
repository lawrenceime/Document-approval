'use client'
import React from 'react'

const PricingHeader = ({children, className}:{children?:React.ReactNode, className?:string}) => {
  return (
    <div className={`${className} lg:w-[960px]`}>
    {children}
    </div>
  )
}

export default PricingHeader