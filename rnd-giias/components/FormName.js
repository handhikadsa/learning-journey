'use client'

import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "200" });

const FormUser = () => {

    const router = useRouter()

    return (
        <div className="bg-gradient-to-tl from-[#222834] to-[#353F54] rounded-[30px] py-8 px-10">
            <div className={`${poppins.className} text-white text-[20px] text-center mb-8`}>Type Your Name</div>
            <form className="flex flex-col">
                <input className={`${poppinsLight.className} text-white !bg-[#242C3B] py-3 px-4 rounded-[8px] placeholder:opacity-50 placeholder:text-[17px] border-none shadow-none mb-6 focus-visible:outline-none`} placeholder="Name" type="text" name="name" />
                <div className="flex justify-center">
                    <button className="bg-[#2401FE] text-white hover:bg-white hover:text-[#2401FE] rounded-[10px] w-[160px] py-3 transition-colors duration-500" 
                    onClick={() => router.push('/photobooth')}
                    type="button"
                    >GO</button>
                </div>
            </form>
        </div>
    );
}

export default FormUser;