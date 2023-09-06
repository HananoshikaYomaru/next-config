import { trpc } from "@/util";
import { publicConfig } from "@/publicConfig.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps, type InferGetStaticPropsType } from "next";

export default function About() {
  const { data } = trpc.id.useQuery();
  const { t } = useTranslation("test");

  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <div className="text-red-500">About: {JSON.stringify(data)}</div>
      <div>{publicConfig.id}</div>
      <div>{t("hello")} test</div>
      {/* <div>{serverConfig.secret} </div> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<{}> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["test"])),
      // Will be passed to the page component as props
    },
  };
};
