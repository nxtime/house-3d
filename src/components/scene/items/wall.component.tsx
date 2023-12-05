import { Color } from "@react-three/fiber";

type Size = [_width: number, _height: number, _depth: number];

type Position = [_x: number, _y: number, _z: number];

interface WallProps {
  size: Size,
  pos: Position,
  color?: Color
}

export const Wall = ({ size, pos, color = "gray" }: WallProps) => {
  return (
    <mesh position={pos} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
