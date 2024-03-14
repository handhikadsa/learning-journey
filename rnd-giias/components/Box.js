'use client'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Box = () => {
    const boxRef = useRef()

    useFrame(({ clock }) => {
        boxRef.current.rotation.x = Math.sin(clock.getElapsedTime())
        boxRef.current.rotation.y = Math.cos(clock.getElapsedTime())
    })

    return (
        <mesh ref={boxRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
} 

export default Box