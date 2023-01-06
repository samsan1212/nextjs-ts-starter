import { createContext } from "react";

import { ScreenType } from "./constants";

type Props = {
  type: ScreenType;
};

export const ScreenContext = createContext<Props>({
  type: ScreenType.MOBILE,
});
