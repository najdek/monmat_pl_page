import { Navbar } from "flowbite-react";
import { Footer } from 'flowbite-react';
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarLink({ title, href }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <Navbar.Link className={currentRoute === `${href}` ? "text-indigo-500 dark:text-white" : ""} as={Link} prefetch={false} href={href}>
      {title}
    </Navbar.Link>
  )
}

export function NavbarElement(t) {
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
  return (
    <Footer className={inter.className} container>
      <div className="w-full text-center">
        <Footer.Copyright href="#" by="MONMAT Mateusz Najdek" year={2024} />
      </div>
    </Footer>
  )
}