// import { usePathname, useParams  } from "next/navigation"
import Table from "../../components/about/Table"
import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
    title: "Profile Page"
}

const Profile = async () => {

    return (
        <>
            <h1 className="text-center">This is Profile Page</h1>

            <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mt-5 pb-10 px-5">
                <Suspense fallback={<Loading />}>
                    <Table />
                </Suspense>
            </div>
        </>
    )
}

export default Profile