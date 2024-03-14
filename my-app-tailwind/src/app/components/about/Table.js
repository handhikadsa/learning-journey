import TableList from "./TableList"

const getData = async () => {

    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch(" https://pokeapi.co/api/v2/pokemon", {
        next: {
            revalidate: 0
        }
    })
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const { results } = await res.json()

    return results
}

const Table = async () => {

    const data = await getData()
    
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