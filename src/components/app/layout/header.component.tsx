import { Button } from "@/components/ui/button";
import { FLOORS, SHORT_FLOORS } from "@/constants/floors.enum";
import { navigationStore } from "@/stores/navigation.store";

export const Header = () => {
  const {
    currentFloor,
    changeFloor,
    currentCameraPosition,
    currentCameraRotation,
  } = navigationStore();

  return (
    <>
      <header className="w-full flex justify-end gap-4">
        <Button onClick={changeFloor}>{FLOORS[currentFloor]}</Button>
      </header>
      <div className="flex justify-center items-center gap-2 pointer-events-none select-none">
        <h2 className="pointer-events-none text-4xl">{SHORT_FLOORS[currentFloor]}</h2>
        <pre className="pointer-events-none">{JSON.stringify(currentCameraPosition)}</pre>
        <pre className="pointer-events-none">{JSON.stringify(currentCameraRotation)}</pre>
      </div>
    </>
  );
};
