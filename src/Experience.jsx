import Logo from "./components/3D/Logo";
import { Text3D } from "@react-three/drei"
import robo from "./assets/robo.json"

export default function Experience() {

    return (
        <>
            {/* <Text3D 
                font={robo}
                scale={0.4}
                position={[-1, 0, 0]}
            >
                Vertex Codes
                <meshNormalMaterial />
            </Text3D> */}
            <Logo />

        </>
    )
}