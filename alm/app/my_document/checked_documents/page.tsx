import React from 'react'
import { TrashBar } from "../../components/Delete_Reset_Bar"
import Table from '@/app/components/table/Table'
import CardList from '../CardList'
import Search from '../../components/Search'
import Filter from '../../components/filter/page'
import Sorting from '../../components/sorting/Sorting'
const page = () => {
    return (

        <div className='lg:mx-[173px] '>
            <CardList />

            <div className='lg:flex lg:justify-between lg:items-center gap-[18px]'>
                <Search />
                <Filter />
                <Sorting />
            </div>
            <TrashBar />
            <Table />
        </div>

    )
}

export default page