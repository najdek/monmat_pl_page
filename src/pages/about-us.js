import Layout from "@/components/layout";
import { AboutusCard } from "@/components/aboutus-card";

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

export default function Page() {
    const { t } = useTranslation(["about-us", "navbar"])
    return (
        <>
            <Head>
                <title>{t("title")}</title>
            </Head>
            <main
                className={`flex min-h-screen flex-col items-center ${inter.className}`}
            >
                <div className={`${inter.className} p-0 sm:p-6 items-center`}>

                    <AboutusCard text={t("card-1")} img="/a_tshirt.svg" align="left">
                    </AboutusCard>

                    <AboutusCard text={t("card-2")} img="/a_abstract.svg" align="right">
                    </AboutusCard>

                    <AboutusCard text={t("card-3")} img="/a_box.svg" align="left">
                    </AboutusCard>

                    <AboutusCard text={t("card-4")} img="/a_business.svg" align="right">
                    </AboutusCard>

                    <AboutusCard text={t("card-5")} img="/a_stars.svg" align="left">
                    </AboutusCard>

                    <AboutusCard text={t("card-6")} img="/a_gift.svg" align="right">
                    </AboutusCard>

                </div>
            </main>
        </>
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}