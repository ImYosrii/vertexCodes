import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Experience from "./Experience"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"

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
      <Home />
      <Canvas
      camera={cameraSettings}
      > 
        <OrbitControls />
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 3, 5]} intensity={2} />

        <Experience />
      </Canvas>
    </>
  )
}
