import React from 'react'
import EmptyTrash from './EmptyTrash'
import { Header } from './Header'
import Trash from '@/app/components/Trash'
import Search from '../../components/Search'
import Filter from '../../components/filter/page'
import Sorting from '../../components/sorting/Sorting'
const page = () => {
    return (
        <div className='lg:mx-[173px] mt-[40px] overflow-hidden'>
            <div className='lg:flex lg:justify-start lg:items-center lg:mb-[32px] '>
                <Header />
                <Trash />
            </div>
            <div className='lg:flex lg:justify-between lg:items-center gap-[18px]'>
                <Search />
                <Filter />
                <Sorting />
            </div>
            <EmptyTrash />
        </div>
    )
}

export default page