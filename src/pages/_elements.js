import { Navbar } from "flowbite-react";

export function Header() {
    return (
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src="/logo.svg" className="mr-3 h-6 sm:h-9"></img>
  
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