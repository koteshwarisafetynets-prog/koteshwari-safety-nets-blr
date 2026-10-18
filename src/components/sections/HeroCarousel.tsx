"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
  altText: string;
  ctaText: string;
  ctaLink: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Bangalore's Trusted Local Family Business for",
    highlight: "Safety Nets & Invisible Grills",
    subtitle: "Honest transparent pricing with zero hidden fees. Dedicated Bangalore neighborhood technicians delivering precision installation, genuine after-sales support, and tested 10-year warranty.",
    image: "/images/main-images/koteshwari-balcony-invisible-grills-bangalore.webp",
    altText: "Koteshwari Safety Nets custom SS316 marine-grade invisible balcony grills overlooking Bangalore skyline",
    ctaText: "Get Transparent Quote",
    ctaLink: "/pricing",
    badge: "Honest Pricing • Zero Hidden Charges • 10-Year Warranty",
  },
  {
    id: 2,
    title: "Protect Toddlers & Pets With Reliable,",
    highlight: "High-Tensile Knotted Balcony Netting",
    subtitle: "Precision diamond-anchored virgin copolymer mesh that withstands Bangalore monsoons while keeping balconies completely airy, open, and secure for your family.",
    image: "/images/services/koteshwari-balcony-net-installation-bangalore.webp",
    altText: "Koteshwari Safety Nets heavy-duty childproof balcony fall protection netting in Bangalore apartment",
    ctaText: "Explore Balcony Nets",
    ctaLink: "/services/balcony-safety-nets",
    badge: "Tested 140kg+ Load • 10-Year Warranty • Local Family Care",
  },
  {
    id: 3,
    title: "Humane Bird Exclusion & Clean,",
    highlight: "Zero-Visibility Anti-Pigeon Netting",
    subtitle: "Permanently stop pigeon droppings and balcony foulness without harming birds. Fitted with rustproof anchors and complete after-sales tension re-checks.",
    image: "/images/hero/koteshwari-pigeon-safety-nets-bangalore.webp",
    altText: "Koteshwari Safety Nets translucent anti-pigeon netting installed across residential utility balcony in Bangalore",
    ctaText: "View Pigeon Nets",
    ctaLink: "/services/pigeon-safety-nets",
    badge: "Humane Exclusion • 100% Odor-Free • Honest Measurement",
  },
  {
    id: 4,
    title: "Contemporary Architectural Security With",
    highlight: "SS316 Marine Invisible Grills",
    subtitle: "Say goodbye to dark metal cage grills. We install ultra-high tensile 316-grade stainless steel cables that safeguard your high-rise home while preserving panoramic views.",
    image: "/images/services/koteshwari-duct-pigeon-nets-bangalore.webp",
    altText: "Koteshwari Safety Nets industrial duct area and building shaft safety net rigging in Bangalore",
    ctaText: "Explore Invisible Grills",
    ctaLink: "/services/balcony-invisible-grills",
    badge: "SS316 Marine Grade • 180° Panoramic View • Anti-Rust",
  },
  {
    id: 5,
    title: "Space-Saving Balcony Organization With",
    highlight: "Dual-Pulley Ceiling Cloth Drying Hangers",
    subtitle: "Reclaim 100% of your balcony floor. Individual rustproof SS304 stainless rods lower smoothly to chest height and hoist easily to the ceiling.",
    image: "/images/services/koteshwari-ceiling-cloth-drying-hangers.webp",
    altText: "Koteshwari Safety Nets ceiling-mounted stainless steel pulley cloth drying rack in Bangalore home",
    ctaText: "Explore Cloth Hangers",
    ctaLink: "/services/ceiling-cloth-hangers",
    badge: "Heavy Duty SS304 • Dual Pulley • 100% Floor Space Saved",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Images */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={s.image}
            alt={s.altText}
            fill
            priority={idx === 0}
            className="object-cover object-center filter brightness-[0.88] contrast-[1.05] scale-105 transition-transform duration-[8000ms] ease-out"
            sizes="100vw"
            quality={85}
          />
          {/* Clean Scrim Overlay - Minimal Neutral Tint for Maximum Image Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/10 pointer-events-none"></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/20 text-[#FFA756] text-xs font-bold uppercase tracking-wider self-start shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              {slide.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA756] to-[#F28C28] drop-shadow-sm">
                {slide.highlight}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {slide.subtitle}
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-100">
              <div className="flex items-center gap-2 bg-slate-950/40 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span className="font-medium text-slate-100">Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-950/40 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span className="font-bold text-[#FFA756]">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1 bg-slate-950/40 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span className="font-bold text-white">Genuine After-Sales</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-4">
              <Link
                href={slide.ctaLink}
                className="bg-gradient-to-r from-[#F28C28] to-[#FFA756] hover:from-[#FFA756] hover:to-[#F28C28] text-slate-950 font-black px-7 py-3.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_rgba(242,140,40,0.35)] flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919901102266"
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-md border border-white/25 transition-all duration-300 flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#F28C28]" />
                <span>Call +91 99011 02266</span>
              </a>

              <a
                href="https://wa.me/919901102266?text=Hi%20Koteshwari%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20an%20honest%20free%20quote%20for%20safety%20nets."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold p-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Card (Right Column Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <div className="bg-slate-900/65 backdrop-blur-xl border border-white/15 p-6 rounded-3xl text-white shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/10 border border-white/10 rounded-2xl text-[#F28C28]">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">Community Trusted</div>
                  <p className="text-xs text-slate-300">Family-Operated Bangalore Specialists</p>
                </div>
              </div>

              <div className="bg-[#4B2E83]/40 border border-[#E6DDF5]/20 rounded-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-[#F28C28] text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">
                    Neighbour Choice
                  </span>
                  <span className="text-xs font-bold text-[#FFA756]">Honest Quotes</span>
                </div>
                <span className="text-xs font-black text-white">10-Yr Warranty</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-slate-200">
                <div className="flex justify-between items-center">
                  <span>Satisfied Families</span>
                  <span className="font-bold text-[#FFA756] text-sm">3,850+ Homes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Transparent Billing</span>
                  <span className="font-bold text-[#FFA756] text-sm">Itemized &amp; Exact</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Community Rating</span>
                  <span className="font-bold text-[#FFA756] text-sm">4.96 / 5.0 ★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Technician Dispatch</span>
                  <span className="font-bold text-[#FFA756] text-sm">Same-Day Local</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-2.5">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
