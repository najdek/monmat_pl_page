import Image from "next/image";
import { NavbarElement } from "./_elements";
import { FooterElement } from "./_elements";

import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarElement />


      <main
       className={`flex min-h-screen flex-col items-center ${cabin.className}`}
      >
        hey
      </main>

      <FooterElement />
    </>

  );
}
