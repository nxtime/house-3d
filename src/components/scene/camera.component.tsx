import { navigationStore } from "@/stores/navigation.store";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useRef } from "react";

export const Camera = memo(() => {
  const cameraRef = useRef<any>(null);
  const { changeCameraPosition, changeCameraRotation } = navigationStore();

  useFrame(() => {
    if (cameraRef.current) {
      changeCameraPosition(cameraRef.current.position);
      changeCameraRotation(cameraRef.current.rotation);
    }
  });

  return (
    <PerspectiveCamera ref={cameraRef} position={[5.61, 12.1, 16.27]} rotation={[-0.43, 0.54, 0.23]} makeDefault />
  );
});
