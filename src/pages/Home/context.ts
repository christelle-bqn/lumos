import { createContext, useContext } from "react";

export type HomeContext = {
  mousePos: { x: number; y: number };
  showMain: boolean;
  handleInstructions: () => void;
};

export const homeContext = createContext<HomeContext>({
  mousePos: { x: 0, y: 0 },
  showMain: false,
  handleInstructions() {},
});

export function useHomeContext(): HomeContext {
  return useContext(homeContext);
}
