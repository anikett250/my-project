"use client"
import { motion } from "framer-motion"

export default function Services() {
    return (
        <div className="mx-[40px] ">
            <motion.div className="text-white text-[40px] sm:text-[55px] md:text-[70px] text-center mt-14 sm:mt-20 md:mt-27">
                Our Services
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-20 mt-10 px-4 sm:px-6 md:px-8">

                {/* 🔹 Web Design Card */}
                <motion.div className="relative w-full md:max-w-2xl rounded-[30px] overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                >
                    {/* 🔹 Glass Layer (bottom) */}
                    <div className="absolute inset-0 
              bg-[#6E6E6E]/5 backdrop-blur-2xl 
              border border-white/10 
              [mask-image:linear-gradient(to_bottom,black_70%,transparent)]
              z-0">
                    </div>

                    {/* 🔹 SVG (top layer, NOT affected) */}
                    <div className="relative z-20">
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mx-auto mt-10">
                            <path d="M8 3V0H6V3H8Z" fill="#ffffff"></path>
                            <path d="M0.792893 2.20711L3.29289 4.70711L4.70711 3.29289L2.20711 0.792893L0.792893 2.20711Z" fill="#ffffff"></path>
                            <path d="M6 5L5 6.00001L8 15H10L10.7172 12.1314L14.2929 15.7071L15.7071 14.2929L12.1314 10.7172L15 10V8L6 5Z" fill="#ffffff"></path>
                            <path d="M0 6H3V8H0V6Z" fill="#ffffff"></path>
                        </svg>
                    </div>

                    {/* 🔹 Content (above glass) */}
                    <div className="relative z-10 p-6 sm:p-8">
                        <div className="text-white text-center text-[24px] sm:text-[30px]">
                            Web Design
                        </div>

                        <div className="text-[#6E6E6E] text-center text-[16px] sm:text-[18px] md:text-[20px] mt-6">
                            We design high-performing websites that combine clean aesthetics with strategic functionality. Every layout is crafted to capture attention, guide user behavior, and convert visitors into clients. From responsive design to seamless user experience, our focus is on building digital assets that not only look exceptional but also drive measurable business growth.
                        </div>
                    </div>
                </motion.div>


                {/* 🔹 Web Development Card */}
                <motion.div className="relative w-full md:max-w-2xl items-center rounded-[30px] pb-10 sm:pb-16 md:pb-25 overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                >
                    {/* 🔹 Glass Layer (bottom) */}
                    <div className="absolute inset-0 
              bg-[#6E6E6E]/5 backdrop-blur-2xl 
              border border-white/10 
              [mask-image:linear-gradient(to_bottom,black_70%,transparent)]
              z-0">
                    </div>

                    {/* 🔹 SVG (above glass) */}
                    <div className="relative z-20">
                        <svg
                            viewBox="-1.35 -1.35 17.70 17.70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 mx-auto mt-10"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 2.5C0 1.67157 0.671573 1 1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5ZM5.79293 7.50001L3.14648 4.85356L3.85359 4.14645L7.20714 7.50001L3.85359 10.8536L3.14648 10.1465L5.79293 7.50001ZM12 11H8V10H12V11Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>

                    {/* 🔹 Content (above glass) */}
                    <div className="relative z-10 p-6 sm:p-8">
                        <div className="text-white text-[24px] sm:text-[30px] text-center">
                            Web Development
                        </div>

                        <div className="text-[#6E6E6E] text-[16px] sm:text-[18px] md:text-[20px] mt-6 text-center">
                            We build fast, scalable, and reliable websites engineered for performance and growth. Our development process focuses on clean code, seamless functionality, and robust architecture to ensure your site runs smoothly across all devices. From frontend interactions to backend systems, we deliver solutions that support long-term success and adaptability.
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}