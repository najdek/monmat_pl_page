import { Navbar } from "flowbite-react";
import { Footer } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from 'next/link';
import { Router, useRouter } from 'next/router';

function NavbarLink({ title, href }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Navbar.Link className={currentRoute === `${href}` ? "text-indigo-500 dark:text-white" : ""} as={Link} prefetch={false} href={href}>
      {title}
    </Navbar.Link>
  )
}

function LanguageLink(o) {
  const router = useRouter();
  const currentRoute = router.pathname;
  const currentLocale = router.locale;
  console.log(currentLocale);
  return (
    <Dropdown.Item as={Link} href={currentRoute} locale={o.locale} className={currentLocale === `${o.locale}` ? "font-bold" : ""}>{o.title}</Dropdown.Item>
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

export function NavbarElement(t) {
  const router = useRouter();
  let translations = t["translations"];
  return (
    <Navbar className={`${inter.className}`} fluid={true} rounded={true}>
      <Navbar.Brand as={Link} prefetch={false} href="/">
        <div className="mr-3 h-7 sm:h-9 monmat-logo"></div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavbarLink title={translations["home"]} href="/"></NavbarLink>
        <NavbarLink title={translations["about-us"]} href="/about-us"></NavbarLink>
        <NavbarLink title={translations["contact-us"]} href="/contact-us"></NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  )
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