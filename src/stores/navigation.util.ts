import { FLOOR } from "@/constants/floors.enum";
import { CameraPosition } from "./navigation.store";

export const toFloat = (number: number) => {
  return parseFloat(number.toFixed(2));
};

export const checkForPositionsDiff = (
  currentCameraPosition: CameraPosition,
  previousCameraPosition: CameraPosition,
) => {
  return Object.entries(currentCameraPosition).every(
    ([axis, position]) =>
      toFloat(position) === toFloat(previousCameraPosition[axis]),
  );
};

export const invertCurrentFloor = {
  [FLOOR.FIRST]: FLOOR.SECOND,
  [FLOOR.SECOND]: FLOOR.FIRST,
};
