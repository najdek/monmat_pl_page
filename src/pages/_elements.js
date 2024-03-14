import { Navbar } from "flowbite-react";
import { Footer } from 'flowbite-react';

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });


export function NavbarElement() {
  return (
      <Navbar className={`${cabin.className}`} fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <div className="mr-3 h-6 sm:h-9 monmat-logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/about-us">
            About Us
          </Navbar.Link>
          <Navbar.Link href="/products">
            Products
          </Navbar.Link>
          <Navbar.Link href="/gallery">
            Gallery
          </Navbar.Link>
          <Navbar.Link href="/contact-us">
            Contact Us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  )
}

export function FooterElement() {
  return (
    <Footer className={cabin.className} container>
      <div className="w-full text-center">
        <Footer.Copyright href="#" by="MONMAT Mateusz Najdek™" year={2024} />
      </div>
    </Footer>
    )
}