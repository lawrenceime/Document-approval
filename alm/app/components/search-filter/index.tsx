import React from 'react'
import Search from './search/Search'
import Filter from './filter/Filter'
import Sorting from './sorting/Sorting'
const index = () => {
    return (
        <div className='lg:flex lg:justify-between lg:items-center gap-[18px]'>
            <Search />
            <Filter />
            <Sorting />
        </div>
    )
}

export default index