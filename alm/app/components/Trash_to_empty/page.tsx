import React from 'react'
import EmptyTrash from "./EmptyTrash"
import Trash from '../Trash-Document/Trash'
import Search_Filter from "../search-filter/index"
const page = () => {
  return (
    <div>
    <Trash/>
    <Search_Filter/>
    <EmptyTrash/>

    </div>
  )
}

export default page