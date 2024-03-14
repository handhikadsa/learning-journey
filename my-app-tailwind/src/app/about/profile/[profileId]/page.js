

export async function generateMetadata({ params }) {

    const capitalize = params.profileId.charAt(0).toUpperCase() + params.profileId.slice(1)

    return {
      title: `${capitalize} | Detail Profile`,
    }
  }

const getData = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

const ProfileDetail = async ({ params: { profileId } }) => {
    const data = await getData(profileId)

    return (
        <>
          <h1>Pokemon Name</h1>
          <h1 className="text-center">{data.name}</h1>
        </>
    )
}

export default ProfileDetail