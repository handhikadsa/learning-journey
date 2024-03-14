import { AddForm } from "../components/about/add-form"

export const metadata = {
    title: "About Page"
}


const About = async () => {

    return (
        <>
            <h1 className="text-center">This is About Page</h1>
            <AddForm />
        </>
    )
}

export default About