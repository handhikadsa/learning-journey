// import { usePathname, useParams  } from "next/navigation"
import Table from "../../../components/about/Table"

export const metadata = {
    title: "Profile Page"
}

const getData = async () => {
    const res = await fetch(" https://pokeapi.co/api/v2/pokemon")
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const { results } = await res.json()
   
    return results
}


const Profile = async () => {
    const data = await getData()

    return (
        <>
            <h1 className="text-center">This is Profile Page</h1>

            <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mt-5 pb-10 px-5">
                <Table data={data} />
            </div>
        </>
    )
}

export default Profile