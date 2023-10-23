import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
    text?: string
    src?: string
    className?: string
}
const Button = ({ text, src, className }: Props) => {
    return (

        <div className={`flex justify-start items-center gap-[16px] py-[12px] px-[20px] rounded-[8px] ${className}`} >
            <div >
                <p className={`text-[#394455] text-[14px] font-[Inter] font-semibold leading-[16px] ${className}`}>{text}</p>
            </div>
            <div>
                {src && <Image
                    src={src}
                    alt=""
                    width={24}
                    height={24}
                />}
            </div>
        </div>





    )
}

export default Button