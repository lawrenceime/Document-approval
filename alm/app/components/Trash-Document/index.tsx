import React from 'react'
import Trash from './Trash'
import TrashTable from './TrashTable'
import Search_Filter from "../search-filter/index"
import Go_back from './Go_back'
const index = () => {
    return (
        <div>
            <Go_back />
            <Trash />
            <Search_Filter />
            <TrashTable />
        </div>
    )
}

export default index