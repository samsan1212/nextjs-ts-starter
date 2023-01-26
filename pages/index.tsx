import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeadFactory from "lib/HeadFactory";

import type { GetStaticPropsContext } from "next";
import type { PropsWithoutRef } from "react";

type Props = {
  locale: string;
};

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
