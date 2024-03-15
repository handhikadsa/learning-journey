'use client'

import { useState } from "react";
import ModalComponent from "@/components/ModalComponent";
import Scene from "@/components/Scene";
import Monkey from "@/components/Monkey";
import { Button } from "@material-tailwind/react";

export default function Home() {

  const [start, setStart] = useState(true)

  return (
    <main className="pt-28">
      <div className="flex justify-center items-center">
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
      </div>
    </main>
  );
}
