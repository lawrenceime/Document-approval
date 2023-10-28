'use client'
import React from 'react'
import { useState } from 'react'
import { Options } from './FilterOptions'
import Image from 'next/image'

const Filter = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectOption, setSelectOption] = useState(Options[0])
    return (
        <div className='lg:w-[186px] h-[47px] px-[12px] py-[i6px] border border-[#D9DBE9)] bg-[#FFF] rounded-[9px] mt-[41px] z-40'>
            <div className='flex justify-between  items-center py-3'>

                <div onClick={() => setShowDropdown(!showDropdown)} className='flex justify-start items-center gap-[10px] cursor-pointer'>
                    <div className='shrink-0'>
                        <Image
                            src="/images/bx-filter.svg"
                            alt='Filter'
                            width={24}
                            height={24}
                        />
                    </div>
                    <button >{selectOption}</button>
                </div>
                <div className='shrink-0'>
                    <Image
                        src="/images/bx-chevron-down.svg"
                        alt='Filter'
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            {showDropdown && <ul className='lg:w-[212px] py-[19px] px-[21px] rounded-[5px] shadow-md space-y-[16px]  bg-[rgb(255,255,255)] z-40'>
                {Options.map((option, index) => (<li key={index} onClick={() => {
                    setSelectOption(option)
                    setShowDropdown(false)
                }} className={`${selectOption === option ? "bg-[#394455] rounded-[5px] cursor-pointer p-[6px] text-[#FFF]" : " hover:bg-[#394455] hover:text-[#FFF] hover:p-[6px] cursor-pointer text-[#394455] text-[14px] font-[Inter] font-bold leading-4 not-italic"}`}>
                    {option}
                </li>))}
            </ul>
            }
        </div>
    )
}

export default Filter