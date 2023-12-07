import { create } from "zustand";

type BlockType = {
  x: number;
  y: number;
  z: number;
};

interface TooltipProps {
  blockPosition: BlockType;
  blockSize: BlockType;
}

const DEFAULT_BLOCK = {
  x: 0,
  y: 0,
  z: 0
}

interface TooltipState extends TooltipProps {
  setBlockSize: (block: BlockType) => void;
  setBlockPosition: (block: BlockType) => void;
}

const initialState: TooltipProps = {
  blockPosition: DEFAULT_BLOCK,
  blockSize: DEFAULT_BLOCK
};

export const tooltipStore = create<TooltipState>()((set) => ({
  ...initialState,
  setBlockSize: (blockSize) => set({ blockSize }),
  setBlockPosition: (blockPosition) => set({ blockPosition }),
}));
