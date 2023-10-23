import React from 'react'
import Search_Filter_Sorting from "../search-filter/index"
import CardList from '../card/CardList'
import { CheckedDocument } from './Delete_Reset_Bar'
const page = () => {
    return (
        <div>
             {/* <CardList/>
            <Search_Filter_Sorting/> */}
            <CheckedDocument/>
        </div>
      )
}

export default page