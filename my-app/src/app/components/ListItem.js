'use client'

const ListItem = ({ item, setState, state }) => {
    return (
        <tr>
            <td>{item.anime}</td>
            <td>{item.character}</td>
            <td>{item.quote}</td>
        </tr>
        // <div className="d-flex">
        //     <button type="button" className="text-white btn btn-primary btn-lg" onClick={() => setState(!state)}>{item.character}</button>
        // </div>
    )
}

export default ListItem