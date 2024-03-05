'use client'

import TableList from "./TableList"

const Table = ({ data }) => {
    return (
        <div className="flex w-full overflow-x-auto">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="">Name</th>
                        <th className="">URL</th>
                        {/* <th className="">Quote</th> */}
                    </tr>
                </thead>
                <tbody>
                    <TableList data={data} />
                </tbody>
            </table> 
        </div>
    )
}

export default Table