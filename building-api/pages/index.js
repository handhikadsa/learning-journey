import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useQuantitySelector } from '../utils/hooks/useQuantitySelector'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { state, setState } = useState({
    count: 0,
    message: ""
  })

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-white mt-14">{state?.count}</h1>
        <button className="bg-white text-black px-5 me-3">-</button>
        <button className="bg-white text-black px-5">+</button>
      </div>
    </div>
  )
}
