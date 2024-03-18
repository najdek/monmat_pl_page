import { Card } from "flowbite-react"

export function AboutusCard({ text, img, align }) {
    return (
        <Card className="max-w-3xl m-3 sm:m-5">
            <div className="grid grid-cols-4 relative">
                <div className={`col-span-1 ${align === "right" ? "bg-right-bottom" : "bg-left-top"} sm:bg-center opacity-10 sm:opacity-100 bg-no-repeat absolute w-full h-full sm:h-auto top-0 left-0 sm:static ${align === "right" ? "order-last" : ""}`}
                    Style={`background-image: url(${img});`}>
                </div>
                <div className={`col-span-4 sm:col-span-3 p-6`}>
                    <div className={`text-md text-center  whitespace-pre-wrap`}>{text}</div>
                </div>
            </div>

        </Card>
    )
}