import Image from "next/image";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });
import { Header } from "./_elements";



export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center ${cabin.className}`}
      >
        <div>Hello</div>
      </main>
    </>

  );
}
