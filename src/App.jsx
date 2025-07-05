import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Experience from "./Experience"
import Navbar from "./components/navbar/Navbar"

export default function App() {
  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5],
  }

  return (
    <>
      <Navbar />
      <Canvas
      camera={cameraSettings}
      > 
      <OrbitControls />

        <Experience />
      </Canvas>
    </>
  )
}
