"use client"
import { useState } from "react";
import Contact from "./contact";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Our Services", id: "services" },
  { label: "Projects", id: "projects" },
];

export default function ZenvraFooter() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <footer
      style={{ backgroundColor: "#0A0A0A", minHeight: "10vh" }}
      className="w-full flex flex-col px-6 sm:px-8 md:px-12 lg:px-16 font-sans"
    >
      {/* Main content — grows to fill space */}
      <div className="flex-1 flex items-center max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 w-full items-center">

          {/* Left — Headline */}
          <div>
            <h2
              style={{ color: "#ffffff" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold leading-none tracking-tight"
            >
              Let's<br />Work<br />Together
            </h2>
          </div>

          {/* Right — Subtext + CTA */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
            <p
              style={{ color: "#6E6E6E" }}
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-sm"
            >
              We build fast, modern websites that attract customers and grow
              your business online.
            </p>

            <div>
              <button
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{
                  color: ctaHovered ? "#ffffff" : "#C0392B",
                  borderColor: "#C0392B",
                  backgroundColor: ctaHovered ? "#C0392B" : "transparent",
                  transition: "all 0.25s ease",
                }}
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full border-2 text-xs sm:text-sm md:text-base font-medium tracking-wide cursor-pointer"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className=" mx-auto w-full"
        style={{ borderTop: "1px solid #2A2A2A" }}
      />

      {/* Bottom bar */}
      <div className=" mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 py-6 sm:py-8">

        {/* Brand */}
        <div className="h-8 sm:h-10 flex items-center overflow-hidden"
        >

          <img
            src="/logo.svg"
            alt="logo"
            className="h-30 w-auto block"
          />
        </div>

        {/* Nav links */}
        <button className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={link.id}
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
              style={{
                color: hovered === link.label ? "#BFBFBF" : "#6E6E6E",
                transition: "color 0.15s ease",
                textDecoration: "none",
              }}
              className="text-xs sm:text-sm tracking-wide"
              onClick={() => {
                document.getElementById(link.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </button>

        {/* Copyright */}
        <p style={{ color: "#6E6E6E" }} className="text-xs">
          © 2025 Zenvra Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}