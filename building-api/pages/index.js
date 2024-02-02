import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useQuantitySelector } from '../utils/hooks/useQuantitySelector'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const { onClickMinus, onClickPlus, state } = useQuantitySelector()

  return (
    <div className="container mt-10 mx-auto">
      {/* <h1 className="text-white text-center text-[20px] mb-5">{state}</h1>
      <div className='flex justify-center items-center gap-3'>
        <button className='bg-white w-10 text-[30px] active:bg-red-500 transition ease-in-out duration-300 disabled:bg-white disabled:cursor-not-allowed disabled:opacity-50 rounded' onClick={onClickMinus} disabled={state == 0 && true}>-</button>
        <button className='bg-white w-10 text-[30px] active:bg-red-500 duration-300 disabled:cursor-not-allowed disabled:bg-white disabled:opacity-50 rounded' onClick={onClickPlus} disabled={state == 10 && true}>+</button>
      </div> */}
    </div>
  )
}
