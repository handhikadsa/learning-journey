'use client'
import { useRef, useState } from 'react'
import { useGLTF, OrbitControls, Stage, Html, useProgress, Loader, Gltf } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Suspense } from 'react'
import { Progress, Button } from "@material-tailwind/react";

const CustomLoader = () => {
    return (
        <Html fullscreen>
            <Loader />
        </Html>
    )
}

const Controls = ({ stop, setStop }) => {
    return (
        <Html>
            <Button onClick={() => setStop(!stop)} color={stop ? "red" : "green"} size="sm" className="px-10 text-md">{stop ? "Stop" : "Start"}</Button>
        </Html>
    )
}

const Monkey = ({ start, ...props}) => {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/model/monkey.gltf') 

    // useFrame(({ clock }) => {
    //     x = Math.sin(clock.getElapsedTime())
    //     y = Math.cos(clock.getElapsedTime())
    // })    

    return (
        <>
            {/* <Controls stop={stop} setStop={setStop} /> */}
            <Suspense fallback={<CustomLoader />}>
                <Stage 
                controls={ref} 
                preset="rembrandt" intensity={1} environment="city">
                    <group {...props} dispose={null}>
                        <Gltf
                            src="/model/nike.glb" 
                            receiveShadow 
                            castShadow 
                        />
                        {/* <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Suzanne.geometry}
                            material={nodes.Suzanne.material}
                            position={[0, 0.189, -0.043]}
                        /> */}
                    </group>
                </Stage>
            </Suspense>
            <OrbitControls 
                ref={ref}
                autoRotate={start} 
                enableZoom={false} 
                rotation={{}} 
            />
        </>
    )
}

export default Monkey

// useGLTF.preload("/model/nike.glb");