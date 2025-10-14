"use client";
import * as React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, Play, Pause } from "lucide-react";
import { BrevoForm } from "../BrevoForm";

// Carousel interfaces
interface CompanyPage {
  id: number;
  companyName: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: string;
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lineColor?: string;
  };
}

// Sample data for 20 pages organized in 4 groups of 5
const pageGroups: CompanyPage[][] = [
  // Group 1 (Button 1): Pages 1-5
  [
    {
      id: 1,
      companyName: "Veritas",
      description:
        "Leading provider of cutting-edge AI solutions and cloud infrastructure. Transforming businesses through innovative technology and digital transformation services.",
      image: "/images/veritas.png",
      ctaText: "Learn More",
      ctaLink: "#",
    },
    {
      id: 2,
      companyName: "Veritas",
      description:
        "Pioneering sustainable energy technologies for a cleaner future. Our solar and wind solutions help companies reduce their carbon footprint while saving costs.",
      image: "/images/veritas1.png",
      ctaText: "Explore Solutions",
      ctaLink: "#",
    },
    {
      id: 3,
      companyName: "Veritas",
      description:
        "Revolutionizing healthcare with telemedicine platforms and AI-powered diagnostic tools. Making quality healthcare accessible to everyone, everywhere.",
      image: "/images/veritas2.png",
      ctaText: "Get Started",
      ctaLink: "#",
    },
    {
      id: 4,
      companyName: "Veritas",
      description:
        "Modernizing financial services with blockchain technology and digital banking solutions. Secure, fast, and user-friendly financial products for the digital age.",
      image: "/images/veritas3.png",
      ctaText: "Join Now",
      ctaLink: "#",
    },
    {
      id: 5,
      companyName: "Veritas",
      description:
        "Transforming education through interactive learning platforms and personalized learning experiences. Empowering students and educators worldwide.",
      image: "/images/veritas4.png",
      ctaText: "Start Learning",
      ctaLink: "#",
    },
  ],
  // Group 2 (Button 2): Pages 6-10
  [
    {
      id: 6,
      companyName: "Embergrill",
      description:
        "Building intelligent urban infrastructure with IoT sensors and data analytics. Creating sustainable, efficient, and livable cities for the future.",
      image: "/images/grill.png",
      ctaText: "Discover More",
      ctaLink: "#",
    },
    {
      id: 7,
      companyName: "Embergrill",
      description:
        "Revolutionizing agriculture with precision farming, drone technology, and AI-powered crop monitoring. Feeding the world sustainably.",
      image: "/images/grill1.png",
      ctaText: "View Products",
      ctaLink: "#",
    },
    {
      id: 8,
      companyName: "Embergrill",
      description:
        "Enhancing retail experiences with omnichannel solutions, inventory management, and customer analytics. The future of retail is here.",
      image: "/images/grill2.png",
      ctaText: "Shop Now",
      ctaLink: "#",
    },
    {
      id: 9,
      companyName: "Embergrill",
      description:
        "Optimizing supply chains with real-time tracking, predictive analytics, and automated warehousing. Delivering efficiency at scale.",
      image: "/images/grill3.png",
      ctaText: "Track Shipment",
      ctaLink: "#",
    },
    {
      id: 10,
      companyName: "Embergrill",
      description:
        "Creating immersive content experiences with VR, AR, and AI-powered content generation. The next generation of entertainment.",
      image: "/images/grill4.png",
      ctaText: "Watch Demo",
      ctaLink: "#",
    },
  ],
  // Group 3 (Button 3): Pages 11-15
  [
    {
      id: 11,
      companyName: "Nexio",
      description:
        "Protecting digital assets with advanced cybersecurity frameworks and threat intelligence. Your business security is our priority.",
      image: "/images/nexio.png",
      ctaText: "Secure Now",
      ctaLink: "#",
    },
    {
      id: 12,
      companyName: "Nexio",
      description:
        "Transforming real estate with virtual tours, smart building management, and property analytics. The future of property technology.",
      image: "/images/nexio1.png",
      ctaText: "Explore Properties",
      ctaLink: "#",
    },
    {
      id: 13,
      companyName: "Nexio",
      description:
        "Redefining travel experiences with AI-powered recommendations, seamless booking, and personalized itineraries. Your journey starts here.",
      image: "/images/nexio2.png",
      ctaText: "Plan Trip",
      ctaLink: "#",
    },
    {
      id: 14,
      companyName: "Nexio",
      description:
        "Revolutionizing food industry with smart kitchens, delivery optimization, and sustainable food production. Taste the future.",
      image: "/images/nexio3.png",
      ctaText: "Order Now",
      ctaLink: "#",
    },
    {
      id: 15,
      companyName: "Nexio",
      description:
        "Enhancing athletic performance with wearable technology, data analytics, and virtual training. Where technology meets sports.",
      image: "/images/nexio4.png",
      ctaText: "Start Training",
      ctaLink: "#",
    },
  ],
  // Group 4 (Button 4): Pages 16-20
  [
    {
      id: 16,
      companyName: "Sipora",
      description:
        "Pioneering space technology with satellite networks, space tourism, and interplanetary communication. The final frontier awaits.",
      image: "/images/sipora.png",
      ctaText: "Launch Mission",
      ctaLink: "#",
    },
    {
      id: 17,
      companyName: "Sipora",
      description:
        "Advancing biotechnology with gene therapy, personalized medicine, and synthetic biology. Healing the world, one breakthrough at a time.",
      image: "/images/sipora1.png",
      ctaText: "Learn More",
      ctaLink: "#",
    },
    {
      id: 18,
      companyName: "Sipora",
      description:
        "Building the future with autonomous robots, industrial automation, and AI-powered robotics. The age of intelligent machines.",
      image: "/images/sipora2.png",
      ctaText: "See Robots",
      ctaLink: "#",
    },
    {
      id: 19,
      companyName: "Sipora",
      description:
        "Unlocking quantum computing potential with advanced algorithms, quantum cryptography, and quantum machine learning. The quantum revolution.",
      image: "/images/sipora3.png",
      ctaText: "Explore Quantum",
      ctaLink: "#",
    },
    {
      id: 20,
      companyName: "Sipora",
      description:
        "Advancing brain-computer interfaces and neural technology for medical applications and human enhancement. The mind-machine connection.",
      image: "/images/sipora4.png",
      ctaText: "Connect Mind",
      ctaLink: "#",
    },
  ],
];

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--line": lineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--line)_1px,transparent_0),linear-gradient(to_bottom,var(--line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90%" />
    </div>
  );
};

// Carousel Component
const CompanyCarousel = () => {
  const [activeGroup, setActiveGroup] = useState(0); // 0-3 for buttons 1-4
  const [activePage, setActivePage] = useState(0); // 0-4 for pages 1-5 (loops within group)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setActivePage((prev) => (prev + 1) % 5); // Loops 0-4 within current group
    }, 4000); // 4 seconds per page
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Navigation functions
  const nextPage = useCallback(() => {
    setActivePage((prev) => (prev + 1) % 5); // Loops 0-4
  }, []);

  const prevPage = useCallback(() => {
    setActivePage((prev) => (prev - 1 + 5) % 5); // Loops 4-0
  }, []);

  const changeGroup = useCallback((groupIndex: number) => {
    setActiveGroup(groupIndex);
    setActivePage(0); // Reset to first page of new group
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  // Handle mouse events for pause/resume
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (isAutoPlaying) {
      stopAutoPlay();
    }
  }, [isAutoPlaying, stopAutoPlay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  }, [isAutoPlaying, startAutoPlay]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          prevPage();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextPage();
          break;
        case " ":
          e.preventDefault();
          toggleAutoPlay();
          break;
      }
    },
    [nextPage, prevPage, toggleAutoPlay]
  );

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, isHovered, startAutoPlay, stopAutoPlay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay();
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [stopAutoPlay]);

  const currentPage = pageGroups[activeGroup][activePage];
  const groupNames = [
    "Tech & AI",
    "Smart Solutions",
    "Security & Real Estate",
    "Future Tech",
  ];

  return (
    <div
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Company showcase carousel"
    >
      {/* Main Carousel Content */}
      <div className="relative group">
        <div className="relative rounded-xl  shadow-2xl  backdrop-blur-sm border border-border/50 hover:shadow-3xl hover:shadow-primary/10 transition-all duration-500">
          <div className="aspect-video">
            <img
              src={currentPage.image}
              alt={`${currentPage.companyName} showcase`}
              className="w-full h-full object-fit transition-all duration-700"
            />
          </div>

          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevPage}
              className="bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextPage}
              className="bg-black/30 hover:bg-black/50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Auto-play Controls */}
          <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={toggleAutoPlay}
              className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-3">
            <span>{activePage + 1} of 5</span>
            <span>{isAutoPlaying ? "Auto-playing" : "Manual"}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((activePage + 1) / 5) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Group Selection Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 ${
              groupIndex === activeGroup
                ? "border-primary/50 bg-gradient-to-br from-primary/10 to-transparent shadow-lg shadow-primary/10 scale-105"
                : "border-border/50 hover:border-primary/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent hover:scale-102"
            }`}
            onClick={() => changeGroup(groupIndex)}
          >
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  {groupNames[groupIndex]}
                </h3>
                {groupIndex === activeGroup && (
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0 mt-1" />
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {groupIndex === 0 && "AI & Cloud Solutions"}
                {groupIndex === 1 && "Smart City & Agriculture"}
                {groupIndex === 2 && "Security & Real Estate"}
                {groupIndex === 3 && "Space & Biotechnology"}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.slice(0, 3).map((company, companyIndex) => (
                  <span
                    key={companyIndex}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      groupIndex === activeGroup
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {company.companyName.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Effect Overlay */}
            {groupIndex !== activeGroup && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "SPARKFOLIO",
      subtitle = {
        regular: "",
        gradient: "",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = "/images/landing-white.png",
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text content */}
              <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 text-left">
                <h1 className="text-sm text-gray-600 group font-geist px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent border-[2px] border-black/5 rounded-3xl w-fit">
                  {title}
                  <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                </h1>
                <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)]">
                  {subtitle.regular}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                    {subtitle.gradient}
                  </span>
                </h2>
                <p className="max-w-2xl text-gray-600">{description}</p>
              </div>

              {/* Right side - Brevo Form */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg">
                  <BrevoForm className="w-full" />
                </div>
              </div>
            </div>

            {/* Company Carousel */}
            <div className="mt-32 relative z-10">
              <CompanyCarousel />
            </div>
          </div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
