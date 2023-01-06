import { ScreenType } from "./constants";

export function getScreenType() {
  const width = globalThis.innerWidth;

  if (width >= 1200) return ScreenType.DESKTOP;
  if (width >= 768) return ScreenType.TABLET;
  if (width >= 576) return ScreenType.MOBILE;

  // default mobile as using mobile first design
  return ScreenType.MOBILE;
}
