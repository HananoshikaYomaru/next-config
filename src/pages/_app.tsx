import type { AppType } from "next/app";
import { trpc } from "@/util";
import "../app/globals.css";
import { appWithTranslation } from "next-i18next";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(appWithTranslation(MyApp));
