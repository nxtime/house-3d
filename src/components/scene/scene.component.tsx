import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Camera } from "./camera.component";
import { Terrain } from "./items/terrain";
import { FarmHouse } from "./farm-house/farm-house.component";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export const Scene = () => {
  return (
    <div className="h-4/5 w-4/5 rounded-md overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 60 }}>
        <Camera />
        <FarmHouse />
        <Terrain />

        <EffectComposer>
          <SSAO
            blendFunction={BlendFunction.MULTIPLY} // Use NORMAL to see the effect
            samples={64}
            radius={20}
            intensity={20}
          />
        </EffectComposer>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight intensity={0.5} color="white" position={[0, 0, 5]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
