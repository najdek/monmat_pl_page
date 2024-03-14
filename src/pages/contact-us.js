import { NavbarElement } from "./_elements";
import { FooterElement } from "./_elements";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { MdEmail } from "react-icons/md";


export default function ContactUs() {
    return (
        <>
         <NavbarElement />
            <main
                className={`flex min-h-[calc(100vh-56px)] flex-col items-center ${inter.className} items-center align-middle`}
            >
                <div className={`${inter.className} p-0 sm:p-6 items-center max-w-3xl m-auto`}>
                    <Card>
                    <h3 className="text-2xl">Contact us</h3>
                    <p className="text-xl">Have a question or need assistance? We're here to help! Feel free to reach out to us via email. <br/>Whether you have inquiries about our products, need assistance with an order, or just want to say hello, we'd love to hear from you. <br/>We strive to respond to all inquiries promptly. <br/>Thank you for choosing MONMAT!</p>
                    <Button color="info" size="xl" className="m-auto" href="mailto:kontakt@monmat.pl">
                        <MdEmail className="mr-2 h-5 w-5" />
                        Email us
                    </Button>
                    </Card>
                </div>
            </main>
            <FooterElement />
        </>
    )
}