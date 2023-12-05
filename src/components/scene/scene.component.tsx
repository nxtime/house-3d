import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Camera } from "./camera.component";
import { Terrain } from "./items/terrain";
import { FarmHouse } from "./farm-house/farm-house.component";

export const Scene = () => {
  return (
    <div className="h-4/5 w-4/5 rounded-md overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 60 }}>
        <Camera />
        <FarmHouse />
        <Terrain />

        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
