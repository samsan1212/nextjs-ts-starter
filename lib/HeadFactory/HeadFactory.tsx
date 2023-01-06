import Head from "next/head";
import { useMemo } from "react";

import type { PropsWithChildren } from "react";

type Props = {
  title?: string;
};

/**
 * A factory method for creating Next head component
 */
export function HeadFactory({ children, title }: PropsWithChildren<Props>) {
  const _title = useMemo(() => `${title ? title + "| " : ""}NestJS TS Starter`, [title]);

  return (
    <Head>
      <title>{_title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}
