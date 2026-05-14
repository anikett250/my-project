"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 md:px-50 mt-5 items-center">
      {/* Logo */}
      <motion.div
        className="h-10 flex items-center overflow-hidden"
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.95, type: "spring" }}
      >
        <img src="/logo.svg" alt="logo" className="h-30 w-auto block" />
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex">
        {navItems.map((item, i) => (
          <motion.button
            key={item.label}
            className="px-6 py-2 rounded-full text-[#6E6E6E] font-semibold hover:text-[#BFBFBF] hover:bg-[#191A1B]/100 hover:backdrop-blur-md hover:shadow-lg hover:bg-[#191A1B]/20 transition-all duration-300"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <MobileMenu />
      </div>
    </nav>
  )
}
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#6E6E6E] hover:text-[#BFBFBF] transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {open ? (
          // X icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <motion.div
          className="absolute top-16 left-0 right-0 flex flex-col items-start px-6 py-4 bg-[#191A1B]/90 backdrop-blur-md shadow-lg z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Projects", "Services", "Contact"].map((label) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className="w-full text-left px-4 py-3 rounded-full text-[#6E6E6E] font-semibold hover:text-[#BFBFBF] hover:bg-[#191A1B]/20 transition-all duration-300"
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
}