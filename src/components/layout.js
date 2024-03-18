import { NavbarElement } from "./navbar";
import { FooterElement } from "./footer";
import { useTranslation } from "next-i18next";

export default function Layout({ children }) {
    const { t } = useTranslation(["navbar"])
    return (
        <>
            <NavbarElement
                translations={
                    {
                        "home": t("navbar:home"),
                        "about-us": t("navbar:about-us"),
                        "contact-us": t("navbar:contact-us")
                    }} />        <main>{children}</main>
            <FooterElement />
        </>
    )
}