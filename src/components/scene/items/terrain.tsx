import { DoubleSide } from "three";

const width = 20;
const depth = 50;

export const Terrain = () => {
  return (
    <>
      <mesh
        receiveShadow
        castShadow
        position={[-width / 2, 0, -depth / 2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <planeGeometry attach="geometry" args={[width, depth]} />
        <meshStandardMaterial color="#bbb" side={DoubleSide} />
      </mesh>
    </>
  );
};
