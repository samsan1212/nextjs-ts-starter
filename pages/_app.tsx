/* eslint-disable import/order */
import "../styles/globals.css";
import "../styles/variables.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@fontsource/rubik";
import "@fontsource/noto-sans-hk";

import { ScreenProvider } from "lib/Screen";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}

export default appWithTranslation(App);
