import { COL_E, COL_H } from "@/constants/wall";
import { Wall } from "../items/wall.component";
import { CoveredArea } from "./covered-area.component";

const OUTER_WALL_W = 15.3; // OUTER WALL LONG (WIDTH)
const OUTER_WALL_F = 15.1; // OUTER WALL FRONT SIZE
const OUTER_WALL_G = 2.3; // OUTER WALL GAP BETWEEN INNER

const INNER_WALL_F = 12.6; // INNER WALL FRONT SIZE
const INNER_WALL_W = OUTER_WALL_W - OUTER_WALL_G;

const SIDEWALK_GAP = 4; // SIDEWALK GAP TO COVERED AREA
const COV_GAP = SIDEWALK_GAP + 2; // OUTER WALL GAP TO SIDEWALK

const KITCHEN_W = 5;

export const FarmHouse = () => {
  return (
    <>
      <CoveredArea />
      <group receiveShadow>
        // Outer House Walls
        <Wall
          size={[OUTER_WALL_F, COL_H, COL_E]}
          pos={[-(OUTER_WALL_F / 2 + 3), COL_H / 2, -(COL_E / 2 + COV_GAP)]}
          color="#222"
        />
        <Wall
          size={[COL_E, COL_H, OUTER_WALL_W]}
          pos={[-(COL_E / 2 + 3), COL_H / 2, -(OUTER_WALL_W / 2 + COV_GAP + COL_E)]}
          color="#222"
        />
        <Wall
          size={[COL_E, COL_H, OUTER_WALL_W]}
          pos={[-18, COL_H / 2, -(OUTER_WALL_W / 2 + COV_GAP + COL_E)]}
          color="#222222"
        />
      </group>
      <group>
        // Inner House Walls
        <Wall
          size={[INNER_WALL_F, COL_H, COL_E]}
          pos={[
            -(INNER_WALL_F / 2 + (18 - INNER_WALL_F)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G),
          ]}
          color="#888"
        />
        <Wall
          size={[COL_E, COL_H, INNER_WALL_W]}
          pos={[-(3 + OUTER_WALL_G), COL_H / 2, -(INNER_WALL_W / 2+ COV_GAP + OUTER_WALL_G)]}
          color="#888"
        />
      </group>
      <group>
        <Wall
          size={[INNER_WALL_F - 5, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 5) / 2 + (18 - INNER_WALL_F)),
            COL_H / 2,
            -(COV_GAP + OUTER_WALL_G + KITCHEN_W),
          ]}
          color="#888"
        />
        <Wall
          size={[INNER_WALL_F - 5, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 5) / 2 + (18 - INNER_WALL_F)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G + KITCHEN_W + 3),
          ]}
          color="#888"
        />
        <Wall
          size={[INNER_WALL_F - 5, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 5) / 2 + (18 - INNER_WALL_F)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G + KITCHEN_W + 3 * 2),
          ]}
          color="#888"
        />
        <Wall
          size={[INNER_WALL_F - 10, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 10) / 2 + (18 - 2.5)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G + KITCHEN_W),
          ]}
          color="#888"
        />
        <Wall
          size={[INNER_WALL_F - 10, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 10) / 2 + (18 - 2.5)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G + KITCHEN_W + 3),
          ]}
          color="#888"
        />
        <Wall
          size={[INNER_WALL_F - 10, COL_H, COL_E]}
          pos={[
            -((INNER_WALL_F - 10) / 2 + (18 - 2.5)),
            COL_H / 2,
            -(COL_E / 2 + COV_GAP + OUTER_WALL_G + KITCHEN_W + 3 * 2),
          ]}
          color="#888"
        />
      </group>
    </>
  );
};
