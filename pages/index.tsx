import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import HeadFactory from "lib/HeadFactory";
import landingBannerMobile from "public/landing-banner-mobile.png";
import landingBannerPng from "public/landing-banner.png";
import dareToExploreBannerPng from "public/landing-dare-to-explore.png";
import landingEarthMobilePng from "public/landing-earth-mobile.png";
import landingEarthPng from "public/landing-earth.png";

import type { GetStaticPropsContext } from "next";
import type { PropsWithoutRef } from "react";

type Props = {
  locale: string;
};

const bannerStyle: TwClassName = "bg-yellow-100 relative w-full overflow-hidden";
const ctaButtonStyle: TwClassName =
  "flex items-center justify-center px-[30px] rounded-[62px] border-2 border-solid border-neutral-900 bg-yellow-500 tablet:px-[56px] py-4 text-label tablet:text-h5 font-bold text-neutral-900";

export default function Home({ locale }: PropsWithoutRef<Props>) {
  return (
    <>
      <HeadFactory />
      <main className="bg-neutral-white">Hello</main>
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }: GetStaticPropsContext) {
  const _locale = locale ?? defaultLocale ?? "en";

  return {
    props: { locale: _locale, ...(await serverSideTranslations(_locale, ["common"])) },
  };
}
