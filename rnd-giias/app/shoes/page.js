import { Poller_One } from "next/font/google";
import ShoesCarousel from "@/components/ShoesCarousel"
import FormUser from "@/components/FormName";

export const metadata = {
    title: "Choose Shoes | Oloop Store",
    description: "Oloop Studio Store",
};

const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });

const About = () => {
    return (
        <main className="bg-[url('/images/bg-shoes.png')] h-screen bg-no-repeat bg-[length:100%_100%] bg-center max-w-[500px] mx-auto p-6">
            <h1 className={`${pollerOne.className} text-start text-white text-[40px] leading-none`}>OLOOP<br/>STORE</h1>
            
            <div className="mt-10">
                <ShoesCarousel />
            </div>

            <div className="mt-10">
                <FormUser />
            </div>
        </main>
    )
}

export default About