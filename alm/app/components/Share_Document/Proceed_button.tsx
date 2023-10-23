import React from 'react'
interface Prop {
    text?: string
    className?:string
}
const Proceed_button = ({ text, className }: Prop) => {
    return (
        <div>
            <button className={`lg:w-[268px] lg:-h-[43px] p-[12px] bg-[#188E47]  rounded-[8px] text-[#FFF] text-[14px] font-[Inter] font-medium ${className}`}>{text}</button>
        </div>
    )
}

export default Proceed_button