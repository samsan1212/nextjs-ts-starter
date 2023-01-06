import { useState, useEffect, useMemo } from "react";
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";

import { checkIfClientSide } from "lib/utils/checkIfClientSide";

import { ScreenContext } from "./ScreenContext";
import { ScreenType } from "./constants";
import { getScreenType } from "./getScreenType";

import type { PropsWithChildren } from "react";

export function ScreenProvider({ children }: PropsWithChildren) {
  const [screenType, setScreenType] = useState<ScreenType>(ScreenType.MOBILE);
  const ctx = useMemo(() => ({ type: screenType }), [screenType]);

  useEffect(() => {
    if (!checkIfClientSide()) return;
    const subscription = fromEvent(window, "resize")
      .pipe(
        debounceTime(150),
        map(getScreenType),
        map((type) => {
          setScreenType(type);
        })
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <ScreenContext.Provider value={ctx}>{children}</ScreenContext.Provider>;
}
