'use client'

import NavLink from "../NavLink"
import { useParams } from "next/navigation"

const TableListItem = ({ item, i }) => {

    const params  = useParams()

    const id = params.profileId

    return (
        <tr key={i}>
            <td className="">
                <NavLink className="list-none" href={`/about/profile/${item.name}`}>{item.name}</NavLink>
            </td>
            <td className="">{item.url}</td>
        </tr>
    )
}

export default TableListItem