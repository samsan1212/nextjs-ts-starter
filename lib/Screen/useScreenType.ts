import { useContext } from "react";

import { ScreenContext } from "./ScreenContext";

export function useScreenType() {
  const { type } = useContext(ScreenContext);
  return type;
}
