import { create, persist } from "zustand";
import {
  checkForPositionsDiff,
  invertCurrentFloor,
  toFloat,
} from "./navigation.util";
import { FLOOR } from "@/constants/floors.enum";

export interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

interface NavigationProps {
  currentFloor: FLOOR;
  currentCameraPosition: CameraPosition;
  currentCameraRotation: CameraPosition;
}

interface NavigationState extends NavigationProps {
  changeFloor(): void;
  changeCameraPosition(_cameraPostion: CameraPosition): void;
}

const initialState: NavigationProps = {
  currentFloor: FLOOR.SECOND,
  currentCameraPosition: {
    x: 0,
    y: 0,
    z: 0,
  },
  currentCameraRotation: {
    x: 0,
    y: 0,
    z: 0,
  },
};

export const navigationStore = create<NavigationState>()((set, get) => ({
  ...initialState,
  changeFloor: () =>
    set({
      currentFloor: invertCurrentFloor[get().currentFloor],
    }),
  changeCameraRotation: (currentCameraPosition) => {
    const previousCameraPosition = get().currentCameraRotation;

    const { x, y, z } = currentCameraPosition;
    const shouldNotUpdate = checkForPositionsDiff(
      { x, y, z },
      previousCameraPosition,
    );

    if (shouldNotUpdate) return;

    set({
      currentCameraRotation: { x: toFloat(x), y: toFloat(y), z: toFloat(z) },
    });
  },
  changeCameraPosition: (currentCameraPosition) => {
    const previousCameraPosition = get().currentCameraPosition;

    const shouldNotUpdate = checkForPositionsDiff(
      currentCameraPosition,
      previousCameraPosition,
    );

    if (shouldNotUpdate) return;

    const { x, y, z } = currentCameraPosition;

    set({
      currentCameraPosition: { x: toFloat(x), y: toFloat(y), z: toFloat(z) },
    });
  },
}));
