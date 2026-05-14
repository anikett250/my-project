"use client"
import { useState } from "react";

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const projects = [
    {
        id: 1,
        title: "Ridge - Roofing Website",
        image: "./demoimage2.png",
        github: "https://github.com/anikett250/roofing-demo4",
        live: "https://ridgeroofingdemo.netlify.app/",
    },
    {
        id: 2,
        title: "RoofClaim - Roofing Website",
        image: "./demoimage.png",
        github: "https://github.com/anikett250/roofing-demo2",
        live: "https://roofingdemo3.netlify.app/",
    },
];

function ProjectCard({ project, isHovered, onMouseEnter, onMouseLeave, onTap }: { 
    project: typeof projects[0];
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onTap: () => void;
}) {
    const [active, setActive] = useState(false);
    
    const isOverlayVisible = isHovered || active;

    const handleCardClick = () => {
        onTap();
        setActive(!active);
    };

    const handleLinkClick = () => {
        setActive(false);
    };

    return (
        <div
            className="relative overflow-hidden cursor-pointer mx-[30px] rounded-2xl flex-1 aspect-video"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleCardClick}
        >
            {/* Image */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    transition: "transform 0.6s ease, filter 0.6s ease",
                    transform: isOverlayVisible ? "scale(1.07)" : "scale(1)",
                    filter: isOverlayVisible ? "brightness(0.25)" : "brightness(0.85)",
                    pointerEvents: "none",
                }}
            />

            {/* Bottom gradient + title */}
            <div
                className="absolute inset-x-0 bottom-0"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                    padding: "48px 28px 24px",
                    transition: "opacity 0.4s ease",
                    opacity: isOverlayVisible ? 0 : 1,
                    zIndex: 1,
                    pointerEvents: "none",
                }}
            >
                <p className="text-white text-lg font-semibold">{project.title}</p>
            </div>

            {/* Hover/Tap overlay */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{
                    opacity: isOverlayVisible ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    zIndex: 10,
                    pointerEvents: isOverlayVisible ? "auto" : "none",
                }}
            >
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-white text-sm font-medium px-7 py-3 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.32)",
                        backdropFilter: "blur(8px)",
                        textDecoration: "none",
                        transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                    <GithubIcon /> GitHub
                </a>
                <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-white text-sm font-medium px-7 py-3 rounded-full"
                    style={{
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.32)",
                        backdropFilter: "blur(8px)",
                        textDecoration: "none",
                        transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                    <ExternalLinkIcon /> Live site
                </a>
            </div>
        </div>
    );
}

export default function App() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div style={{ backgroundColor: "#0A0A0A" }} className="">
            <h2 className="text-white text-[40px] sm:text-[55px] md:text-[70px] text-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
                Our Projects
            </h2>

            <div className="mx-auto px-4 sm:px-12 md:px-24 lg:px-60 pb-0">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-20" style={{ minHeight: "370px" }}>
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project}
                            isHovered={hoveredId === project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onTap={() => setHoveredId(null)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}