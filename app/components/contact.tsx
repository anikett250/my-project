"use client"
import { InlineWidget } from "react-calendly"

export default function Contact() {
    return (
        <div className="">
            <div className="text-white text-[40px] sm:text-[55px] md:text-[70px] text-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 ">
                Schedule a Call
            </div>
            <div className=" h-[750px] rounded-[30px] mx-[30px] overflow-hidden">
                <InlineWidget
                    url="https://calendly.com/anikettiwari/contact"
                    styles={{
                        height: "100%",
                        width: "100%",
                    }}
                    className="rounded-[30px] "
                />
            </div>
        </div>
    )
}