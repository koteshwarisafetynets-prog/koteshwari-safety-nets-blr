import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Settings, Home, Shield, Percent } from "lucide-react";
import { servicesData } from "@/utils/servicesData";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceiling & Balcony Cloth Drying Hangers in Bangalore | Koteshwari Safety Nets",
  description:
    "Rust-proof ceiling-mounted pulley cloth drying hangers installed in balconies and utility spaces by Koteshwari Safety Nets across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  alternates: {
    canonical: "/services/cloth-hangers",
  },
  openGraph: {
    title: "Ceiling Cloth Hangers | Koteshwari Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Rust-proof ceiling-mounted pulley cloth drying hangers installed in balconies and utility spaces by Koteshwari Safety Nets across Bangalore: Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    url: "https://koteshwarisafetynets.in/services/cloth-hangers",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ceiling Cloth Hangers Bangalore, Karnataka - Koteshwari Safety Nets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceiling Cloth Hangers | Koteshwari Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Space-saving ceiling cloth hangers installed across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function ClothHangersCategoryPage() {
  const categoryServices = Object.values(servicesData).filter((s) => s.category === "cloth-hangers");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.koteshwarisafetynets.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.koteshwarisafetynets.in/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloth Hangers",
        "item": "https://www.koteshwarisafetynets.in/services/cloth-hangers",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F28C28] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#F28C28]">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Cloth Hangers</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-8 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F28C28] bg-[#FAF7FD] px-3.5 py-1.5 rounded-full inline-block self-start">
            Primary Division
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Cloth Hangers ({categoryServices.length} Services)
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Optimize your balcony floor space using our space-saving cloth hangers. Heavy-duty, rustproof stainless steel pipes engineered for Bangalore weather, backed by 10 Years Warranty and Flat 20% Discount!
          </p>
        </div>

        {/* High-Converting 20% Discount & 10 Years Warranty Scrolling Ticker */}
        <ServicePromoTicker />

        {/* Services List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`Koteshwari Safety Nets - ${service.name} Installation Bangalore, Karnataka`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                
              loading="lazy"
              quality={75}
            />
                <div className="absolute top-3 right-3 bg-[#F28C28] text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md animate-pulse flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  <span>Flat 20% OFF</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#4B2E83] text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#F28C28]" />
                  <span>10 Years Warranty</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#F28C28] transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4B2E83] hover:text-[#F28C28] transition-colors group/btn pt-4 border-t border-slate-50 mt-auto"
                >
                  <span>Claim 20% OFF &amp; View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
