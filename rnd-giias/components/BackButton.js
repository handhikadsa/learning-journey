'use client'

import { useRouter } from "next/navigation";

const BackButton = () => {

    const router = useRouter()

    return (
        <div onClick={() => router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#EEFE01" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </div>
    )
}

export default BackButton;