import { Poller_One, Poppins } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Oloop Store",
  description: "Oloop Studio Store",
};

const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function Home() {

	return (
		<main className="bg-[url('/images/bg-home.png')] h-screen bg-no-repeat bg-[length:100%_100%] bg-center max-w-[500px] mx-auto">
			<div className="h-full flex items-center justify-center w-full flex-col gap-20">
				<h1 className={`${pollerOne.className} text-center text-white text-[60px] leading-none`}>OLOOP<br/>STORE</h1>
				<Link href="/shoes" className={`${poppins.className} text-center bg-[#E8F901] text-[#2401FE] hover:text-[#E8F901] hover:bg-[#2401FE] w-[180px] py-4 rounded-[10px] text-[18px] transition-colors duration-500`}>GO</Link>
			</div>
			{/* <div className="flex justify-center items-center">
				<Button size="lg" color={ start ? "red" : "blue"} onClick={() => setStart(!start)}>{start ? "Stop" : "Start"}</Button>
			</div>
			<div className="grid grid-cols-12 w-full h-96">
				<div className="col-span-12">
				<Scene className="w-full h-full">
					<ambientLight intensity={0.1} />
					<directionalLight color="white" position={[0, 0, 5]} />
					<Monkey start={start} />
				</Scene>
				</div>
			</div> */}
		</main>
	);
}
