'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, Loader } from '@react-three/drei'

const Scene = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Canvas>
                {children}
                <Preload all />
            </Canvas>
        </div>
    )
}

export default Scene