import React from 'react'

import Trash from '../../components/Trash'
import TrashTable from '../../components/TrashTable'
import Header from './Header'
import Go_back from '../../components/Go_back'
import Search from '../../components/Search'
import Filter from '../../components/filter/page'
import Sorting from '../../components/sorting/Sorting'
const page = () => {
    return (
        <div className='lg:mx-[173px] mt-[40px]'>
            <Go_back />
            <Header />
            <Trash />
            <div className='lg:flex lg:justify-between lg:items-center gap-[18px]'>
                <Search />
                <Filter />
                <Sorting />
            </div>
            <TrashTable />
        </div>
    )
}

export default page