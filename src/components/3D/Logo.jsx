
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Logo() {
  const { nodes, materials } = useGLTF('/logo.glb')
  const blue = useRef()

  useFrame((_, delta)=>{
    if (blue.current){
      // blue.current.rotation.z += delta * 2
    }
  })
  return (

    <group position={[-2, 0, 0]} scale={0.13} rotation-x={ Math.PI / 2} rotation-z={-0.3}>
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['Material.002']}
        position={[-1.289, 0, 1.4635]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials['Material.001']}
        position={[1.289, 0, -1.4635]}
      />
    </group>
  )
}

useGLTF.preload('/logo.glb')