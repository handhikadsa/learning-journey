import BackButton from "@/components/BackButton";
import PhotoboohAR from "@/components/PhotoboothAR";

export const metadata = {
    title: "Photobooth | Oloop Store",
    description: "Oloop Studio Store",
};

const Photobooth = () => {
    return (
        <main className="bg-[url('/images/bg-photobooth.png')] h-screen bg-no-repeat bg-[length:100%_100%] bg-bottom max-w-[500px] bg-black px-6 py-10 mx-auto">
            <BackButton />
            <PhotoboohAR />
        </main>
    )
}

export default Photobooth;