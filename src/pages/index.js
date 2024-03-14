import Image from "next/image";
import { NavbarElement } from "./_elements";
import { FooterElement } from "./_elements";
import { Card } from "flowbite-react";
import { Button } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';
import Link from "next/link";


import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarElement />
      <main className={`flex min-h-[calc(100vh-56px)] flex-col items-center align-middle bg-black ${cabin.className}`} >
        <div className="min-h-[calc(100vh-56px)] min-w-full absolute z-0 bg-cover bg-center dark:opacity-30" Style={`background-image: url("./i_bg.jpg");`}>      </div>
        <div className="m-auto z-10 text-center">
          <Card className="max-w-3xl text-center z-10 bg-transparent backdrop-blur-md bg-white/70 border-opacity-20 dark:bg-transparent dark:bg-gray-800/50 dark:border-opacity-20 rounded-2xl rounded-b-none">

            <h1 className={`text-2xl sm:text-4xl font-extrabold`}>Custom-Made for You</h1>
            <h2 className={`text-xl sm:text-3xl font-extrabold`}>Explore Our <span className={`text-blue-600 dark:text-blue-200`}>T-Shirt</span> and <span className={`text-blue-600 dark:text-blue-200`}>mug</span> collection</h2>
          </Card>
          <Button color="warning" size="xl" className="rounded-2xl rounded-t-none" href="https://allegro.monmat.pl/">
            <HiShoppingCart className="mr-2 h-5 w-5" />
            View Our Allegro Offer
          </Button>
        </div>
      </main>
      <FooterElement />
    </>

  );
}
