import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
    const cameraSettings = {
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
    }

    return (
        <>
            <Canvas
                camera={cameraSettings}
            >
                <OrbitControls />

                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>

            </Canvas>
        </>
    )
}