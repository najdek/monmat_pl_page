import Layout from "@/components/layout";

import { Card } from "flowbite-react";
import { Button } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";
import Image from "next/image";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "navbar"
      ])),
      // Will be passed to the page component as props
    },
  }
}


export default function Page() {
  const { t } = useTranslation(["home"])
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <main className={`flex min-h-[calc(100vh-48px)] flex-col items-center align-middle bg-black relative ${inter.className}`} >
        <Image
          className="min-h-[calc(100vh-48px)] min-w-full absolute z-0 dark:opacity-30"
          src="/i_bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
        <div className="m-auto z-10 text-center">
          <Card className="max-w-3xl text-center z-10 bg-transparent backdrop-blur-md bg-white/70 border-opacity-20 dark:bg-transparent dark:bg-gray-800/50 dark:border-opacity-20 rounded-2xl rounded-b-none">
            <h1 className={`text-2xl sm:text-4xl font-bold`}>{t("header-1")}</h1>
            <h2 className={`text-xl sm:text-3xl font-bold`}>{t("header-2-a")} <span className={`text-blue-600 dark:text-blue-200`}>{t("header-2-b")}</span> {t("header-2-c")} <span className={`text-blue-600 dark:text-blue-200`}>{t("header-2-d")}</span> {t("header-2-e")}</h2>
          </Card>
          <Button color="warning" size="xl" className="rounded-2xl rounded-t-none" href="https://allegro.monmat.pl/">
            <HiShoppingCart className="mr-2 h-5 w-5" />
            {t("view-allegro")}
          </Button>
        </div>
      </main>
    </>

  );
}


Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}