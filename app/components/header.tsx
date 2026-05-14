"use client"
import { motion } from "framer-motion"

export default function Header() {
    return (
        <div className="mt-12 sm:mt-20 md:mt-50 flex flex-col justify-center px-4 sm:px-6">
            <div className="text-center">
                <div className="text-[#6E6E6E] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] leading-tight">
                    <span className="text-white mr-2 sm:mr-5">
                        We Build Websites
                    </span>
                    That Turn<br /> Visitors Into
                    <span className="text-white ml-2 sm:ml-5">
                        Clients.
                    </span>
                </div>

                <div className="text-[#6E6E6E] text-[14px] sm:text-[16px] md:text-[20px] mt-6 px-2 sm:px-0">
                    We design and develop fast, modern websites that not only look great but drive real results<br className="hidden sm:block" />
                    helping you attract more customers, build trust, and grow your business online.
                </div>
            </div>
            <div className="flex flex-row justify-center gap-3 items-center">
                <motion.button
                    className="px-6 py-2 mt-7 rounded-full text-[#6E6E6E] font-semibold hover:text-[#BFBFBF] hover:backdrop-blur-md hover:shadow-lg hover:bg-[#191A1B]/20 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                >
                    Book a Call
                </motion.button>
                <motion.button
                    className="px-6 py-2 mt-7 rounded-full text-[#6E6E6E] font-semibold hover:text-[#BFBFBF] hover:backdrop-blur-md hover:shadow-lg hover:bg-[#191A1B]/20 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                >
                    See Our Project
                </motion.button>
            </div>
        </div>
    )
}