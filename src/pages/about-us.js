import { NavbarElement } from "../elements";
import { FooterElement } from "../elements";
import { Card } from "flowbite-react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about-us",
        "navbar"
      ])),
      // Will be passed to the page component as props
    },
  }
}


function MyCard({ text, img, align }) {

    return (
        <Card className="max-w-3xl m-3 sm:m-5">
            <div className="grid grid-cols-4 relative">
                <div className={`col-span-1 ${align === "right" ? "bg-right-bottom" : "bg-left-top"} sm:bg-center opacity-10 sm:opacity-100 bg-no-repeat absolute w-full h-full sm:h-auto top-0 left-0 sm:static ${align === "right" ? "order-last" : ""}`}
                    Style={`background-image: url(${img});`}>
                </div>
                <div className={`col-span-4 sm:col-span-3 p-6`}>
                    <div className={`text-md text-center  whitespace-pre-wrap`}>{text}</div>
                </div>
            </div>

        </Card>
    )
}


export default function AboutUs() {
    const { t } = useTranslation(["about-us", "navbar"])
    return (
        <>
            <Head>
                <title>{t("title")}</title>
            </Head>
            <NavbarElement
                translations={
                    {
                        "home": t("navbar:home"),
                        "about-us": t("navbar:about-us"),
                        "contact-us": t("navbar:contact-us")
                    }} />
            <main
                className={`flex min-h-screen flex-col items-center ${inter.className}`}
            >
                <div className={`${inter.className} p-0 sm:p-6 items-center`}>

                    <MyCard text={t("card-1")} img="/a_tshirt.svg" align="left">
                    </MyCard>

                    <MyCard text={t("card-2")} img="/a_abstract.svg" align="right">
                    </MyCard>

                    <MyCard text={t("card-3")} img="/a_box.svg" align="left">
                    </MyCard>

                    <MyCard text={t("card-4")} img="/a_business.svg" align="right">
                    </MyCard>

                    <MyCard text={t("card-5")} img="/a_stars.svg" align="left">
                    </MyCard>

                    <MyCard text={t("card-6")} img="/a_gift.svg" align="right">
                    </MyCard>

                </div>
            </main>
            <FooterElement />
        </>
    )
}