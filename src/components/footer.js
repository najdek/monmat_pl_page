import { Footer } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });

function LanguageLink({ locale, title }) {
    const router = useRouter();
    const currentRoute = router.pathname;
    const currentLocale = router.locale;
    console.log(currentLocale);
    return (
        <Dropdown.Item as={Link} href={currentRoute} locale={locale} className={currentLocale === `${locale}` ? "font-bold" : ""}>{title}</Dropdown.Item>
    )
}

function LanguageLinks() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const locales = router.locales;
    let links = [];
    let languageFullNames = {
        "en": "English",
        "pl": "Polski"
    }
    for (let i = 0; i < locales.length; i++) {
        let locale = locales[i];
        links.push(<LanguageLink locale={locale} title={languageFullNames[locale] || locale} />);
    }
    return (
        <>{links}</>
    );
}

export function FooterElement() {
    const router = useRouter();
    console.log(router);
    return (
        <Footer className={inter.className} container>
            <div className="w-full text-center">
                <div className="mb-2">
                    <Dropdown label="" dismissOnClick={true} placement="top" renderTrigger={() => (
                        <span className="cursor-pointer">{router.locale.toUpperCase()}</span>
                    )
                    }>
                        <LanguageLinks></LanguageLinks>
                    </Dropdown>
                </div>
                <Footer.Copyright href="#" by="MONMAT Mateusz Najdek" year={2024} />
            </div>
        </Footer>
    )
}
