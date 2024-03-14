import Image from "next/image";
import { Cabin } from "next/font/google";
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${cabin.className}`}
    >
      <div>Hello</div>
    </main>
  );
}
