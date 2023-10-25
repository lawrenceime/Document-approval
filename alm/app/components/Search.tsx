import React from 'react'
import Image from 'next/image'
const Search = () => {
    return (
        <div className='w-full lg:w-[686px] h-[47px] py-[12px] px-[16px] border
         border-[#D9DBE9] rounded-[9px] bg-[#FFF] flex justify-between items-center mt-[41px]'>
            <div  >
                <input
                    type="text"
                    name="" id=""
                    placeholder='Search for document by sender or doc name'
                    className=' w-full lg:w-[620px] h-[24px] focus:outline-0'
                />
            </div>
            <Image
                src="/images/search.svg"
                alt='Search'
                width={24}
                height={24}

            />
            <div>

            </div>


        </div>
    )
}

export default Search