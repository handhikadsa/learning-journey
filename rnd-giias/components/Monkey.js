'use client'
import { useRef, useState } from 'react'
import { useGLTF, OrbitControls, Stage, Html, useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { Progress, Button } from "@material-tailwind/react";

const Loader = () => {
    const { progress } = useProgress()
    console.log("progress: ", progress)
    return (
        <Html center>
            <Progress value={progress} size="lg" color="blue" />
        </Html>
    )
}

const Controls = ({ stop, setStop }) => {
    return (
        <Html center>
            <Button onClick={() => setStop(!stop)} color={stop ? "red" : "green"} size="sm" className="px-10 text-md">{stop ? "Stop" : "Start"}</Button>
        </Html>
    )
}

const Monkey = (props) => {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/model/monkey.gltf')
    const [stop, setStop] = useState(true)

    return (
        <>
            <Controls stop={stop} setStop={setStop} />
            <Suspense fallback={<Loader />}>
                <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
                    <group {...props} dispose={null}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Suzanne.geometry}
                            material={nodes.Suzanne.material}
                            position={[0, 0.189, -0.043]}
                        />
                    </group>
                </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate={stop} />
        </>
    )
}

export default Monkey

useGLTF.preload("/model/monkey.gltf");