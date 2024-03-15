import { NavbarElement } from "../elements";
import { FooterElement } from "../elements";
import { Card } from "flowbite-react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";

function MyCard({ text, img, align }) {

    return (
        <Card className="max-w-3xl m-3 sm:m-5">
            <div className="grid grid-cols-4 relative">
                <div className={`col-span-1 ${align === "right" ? "bg-right-bottom" : "bg-left-top"} sm:bg-center opacity-10 sm:opacity-100 bg-no-repeat absolute w-full h-full sm:h-auto top-0 left-0 sm:static ${align === "right" ? "order-last" : ""}`}
                    Style={`background-image: url(${img});`}>
                </div>
                <div className={`col-span-4 sm:col-span-3 p-6`}>
                    <div className={`text-lg text-center ${align === "right" ? "sm:text-right" : "sm:text-left"} whitespace-pre-wrap`}>{text}</div>
                </div>
            </div>

        </Card>
    )
}


export default function AboutUs() {
    return (
        <>
            <Head>
                <title>monmat.pl - About us</title>
            </Head>
            <NavbarElement />
            <main
                className={`flex min-h-screen flex-col items-center ${inter.className}`}
            >
                <div className={`${inter.className} p-0 sm:p-6 items-center`}>

                    <MyCard text={`Welcome to MONMAT, where creativity meets quality in every T-shirt and mug we produce. \nWith over six years of experience in the industry, we've become specialists in crafting personalized apparel and drinkware that make a statement.`} img="./a_tshirt.svg" align="left">
                    </MyCard>

                    <MyCard text={`At MONMAT, we take pride in our diverse collection of designs, ranging from quirky and humorous to elegant and sophisticated. \nWhether you're looking for a standout T-shirt that reflects your personality or a mug that adds flair to your morning coffee routine, we've got you covered.`} img="./a_abstract.svg" align="right">
                    </MyCard>

                    <MyCard text={`What sets us apart is our commitment to excellence and customer satisfaction. While we've produced thousands of T-shirts and mugs, each item receives the same attention to detail and care. \nWe believe that every design tells a story, and we're dedicated to bringing your ideas to life with precision and passion.`} img="./a_box.svg" align="left">
                    </MyCard>

                    <MyCard text={`While we primarily cater to individual customers with small orders, we also have experience working with businesses for custom merchandise needs. \nOur flexibility and attention to detail ensure that every order, big or small, receives the same level of quality and service.`} img="./a_business.svg" align="right">
                    </MyCard>

                    <MyCard text={`On Allegro, Poland's leading e-commerce platform, we're proud to maintain a 100% positive rating and have earned the esteemed "Super Sprzedawca" title for our exceptional service. \nThis recognition is a testament to our unwavering commitment to providing the best possible experience for our customers.`} img="./a_stars.svg" align="left">
                    </MyCard>

                    <MyCard text={`Thank you for considering MONMAT for your T-shirt and mug needs. We're excited about the opportunity to serve you with creativity, quality, and unmatched service. \nWhether you're browsing for yourself or seeking the perfect gift, we're here to make your experience exceptional. Feel free to explore our collection and reach out with any questions. We look forward to the possibility of earning your trust and becoming your go-to destination for personalized apparel and drinkware.`} img="./a_gift.svg" align="right">
                    </MyCard>

                </div>
            </main>
            <FooterElement />
        </>
    )
}