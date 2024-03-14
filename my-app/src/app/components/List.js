'use client'
import { useState } from "react"
import ListItem from "./ListItem"

const List = ({ data }) => {

    const [state, setState] = useState(false)

    return (
      <>
        {
          data.map((item, i) => {
            return (
                <ListItem item={item} key={i} setState={setState} state={state} />
              )
            })
        }
  
        {
            state &&
            <h2 className="text-danger">Halo</h2>
        }
      </>
    )
}

export default List