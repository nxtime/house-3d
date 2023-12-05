import { COL_E, COL_H } from "@/constants/wall";
import { Wall } from "../items/wall.component";

export const CoveredArea = () => {
  return (
    <Wall
      size={[15.1, COL_E, 2]}
      pos={[-(15.1 / 2 + 3), COL_H - (COL_E / 2), -(2 / 2 + 4)]}
      color="#994D1C"
    />
  );
};
