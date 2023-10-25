
import React from 'react'
import TrashIndex from "../Trash-Document/Trash"
import Search_Filter from "../search-filter/index"
import { CheckedDocument } from "../Checked-Document/Delete_Reset_Bar"
import TrashTable from "../Trash-Document/TrashTable"
const page = () => {
    return (
        <div>
            <TrashIndex />
            <Search_Filter />
            <CheckedDocument />
            <TrashTable />
        </div>
    )
}

export default page