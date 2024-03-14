'use client'

import TableListItem from "./TableListItem"

const TableList = ({ data }) => {

    return (
        <>
            {
                data.map((item, i) => {
                    return (
                        <TableListItem item={item} key={i} />
                    )
                })
            }
        </>
    )
}

export default TableList