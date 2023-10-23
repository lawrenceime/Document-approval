

import React from 'react'
import CardList from '../components/card/CardList'
import Search_Filter_Sorting from "../components/search-filter/index"
import Table from '../components/table/Table'
import { CheckedDocument } from "../components/Checked-Document/Delete_Reset_Bar"
// import TrashTable from '../components/Trash-Document/index'
import EmptyTrash from '../components/Trash_to_empty/page'
import TrashDocument from "../components/Trash-Document/index"
import Preview from '../components/Share_Document/Preview'
import Folder from "../components/Share_Document/index"


const Mydocument = () => {
    return (
        <div className='lg:mx-[173px] '>
            <CardList />
            <Search_Filter_Sorting />
            <CheckedDocument />
            <Table />
            {/* <TrashTable /> */}
            {/* <TrashDocument /> */}
            {/* <EmptyTrash /> */}
            {/* <Folder /> */}
            <Preview/>

        </div>


    )
}

export default Mydocument