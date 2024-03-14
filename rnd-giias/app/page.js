import ModalComponent from "@/components/ModalComponent";
import Scene from "@/components/Scene";
import Box from "@/components/Box";
import Monkey from "@/components/Monkey";

export default function Home() {
  return (
    <main className="flex justify-center align-items-center">
      <Scene className="w-full h-screen">
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        {/* <Box /> */}
        <Monkey />
      </Scene>
    </main>
  );
}
