import { tooltipStore } from "@/stores/tooltip.store";
import { Color } from "@react-three/fiber";
import { useState } from "react";

type Size = [_width: number, _height: number, _depth: number];

type Position = [_x: number, _y: number, _z: number];

interface WallProps {
  size: Size;
  pos: Position;
  color?: Color;
}

export const Wall = ({ size, pos, color = "gray" }: WallProps) => {
  const [shiny, setShiny] = useState(false);
  const { setBlockSize, setBlockPosition } = tooltipStore();

  return (
    <mesh
      position={pos}
      castShadow
      receiveShadow
      onPointerDown={() => {
        setBlockSize({
          x: size[0],
          y: size[1],
          z: size[2],
        });

        setBlockPosition({
          x: pos[0],
          y: pos[1],
          z: pos[2],
        });
      }}
      onPointerEnter={() => setShiny(true)}
      onPointerLeave={() => setShiny(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
      <meshPhongMaterial color={shiny ? 0xff00ff : color} />
    </mesh>
  );
};
