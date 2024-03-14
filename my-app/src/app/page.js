import { Modal, Button, Card } from 'react-bootstrap'
import MainSection from './components/MainSection';

const getData = async () => {
  const res = await fetch("https://animechan.xyz/api/quotes")
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  // const { quotes } = await 
 
  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="container">
      <MainSection data={data} />
    </main>
  );
}
