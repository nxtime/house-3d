import { tooltipStore } from "@/stores/tooltip.store";

const Tooltip = () => {
  const { blockSize, blockPosition } = tooltipStore();

  return (
    <div className="fixed left-0">
      <pre>{JSON.stringify(blockSize)}</pre>
      <pre>{JSON.stringify(blockPosition)}</pre>
    </div>
  );
};

export default Tooltip;
