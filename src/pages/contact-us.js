import { NavbarElement } from "../elements";
import { FooterElement } from "../elements";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import Head from "next/head";

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "contact-us",
        "navbar"
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function ContactUs() {
    const { t } = useTranslation(["contact-us", "navbar"])
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
                className={`flex min-h-[calc(100vh-48px)] flex-col items-center ${inter.className} items-center align-middle`}
            >
                <div className={`${inter.className} p-0 sm:p-6 items-center max-w-3xl m-auto`}>
                    <Card>
                        <h3 className="text-2xl">{t("contact-us")}</h3>
                        <p className="text-xl whitespace-pre-wrap">{t("contact-text")}</p>
                        <Button color="info" size="xl" className="m-auto" href="mailto:kontakt@monmat.pl">
                            <MdEmail className="mr-2 h-5 w-5" />
                            {t("email-us")}
                        </Button>
                    </Card>
                </div>
            </main>
            <FooterElement />
        </>
    )
}