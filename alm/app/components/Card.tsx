import React from 'react'

interface Props {
    children?: React.ReactNode
    className?: string
}

const Card = ({ children, className }: Props) => {
    return (
        <div className={` lg:w- h-[88px]  border-2 rounded-md ${className} shadow-md`}>
            {children}
        </div>
    )
}

export default Card