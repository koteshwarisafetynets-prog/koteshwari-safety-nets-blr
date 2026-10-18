"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Safety Net Solutions",
    count: "11 Specialized Services",
    image: "/images/services/koteshwari-balcony-net-installation-bangalore.webp",
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Fortify balconies, stairwells, and open building shafts with certified UV-treated copolymer netting and mosquito mesh backed by 10 Years Warranty and Flat 20% Discount.",
    slug: "safety-nets",
  },
  {
    id: 2,
    name: "SS316 Invisible Grills",
    count: "5 Architectural Options",
    image: "/images/services/koteshwari-ss316-balcony-invisible-grills.webp",
    icon: <Eye className="w-6 h-6 text-white" />,
    description: "Preserve panoramic 180-degree outdoor views while securing balconies and windows with marine SS316 stainless cables backed by a 10 Years Warranty.",
    slug: "invisible-grills",
  },
  {
    id: 3,
    name: "Cloth Drying Systems",
    count: "3 Space-Saving Designs",
    image: "/images/services/koteshwari-ceiling-cloth-drying-hangers.webp",
    icon: <Settings className="w-6 h-6 text-white" />,
    description: "Reclaim 100% of balcony floor space with smooth dual-pulley stainless steel ceiling hoists with 10 Years Guarantee and Flat 20% Discount.",
    slug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4B2E83] bg-[#FAF7FD] border border-[#D0BFEA] px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Core Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E83] tracking-tight leading-tight">
            High-Altitude Protection &amp; Space Optimization
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered specifically to withstand Bangalore, Karnataka&apos;s coastal climate while safeguarding high-rise homes and commercial properties.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.10)] border border-[#E2E8F0] hover:border-[#F28C28] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={`Koteshwari Safety Nets - ${category.name} in Bangalore`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-[#4B2E83] p-3.5 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:rotate-12 border border-[#5C38A1]">
                  <div className="text-[#F28C28]">{category.icon}</div>
                </div>

                {/* Service count label & Discount badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-xs text-white text-xs font-extrabold px-3 py-1.5 rounded-full border border-white/30">
                    {category.count}
                  </div>
                  <div className="bg-[#F28C28] text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md animate-pulse">
                    Flat 20% OFF
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#4B2E83] mb-3 group-hover:text-[#F28C28] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={`#${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#4B2E83] hover:text-[#F28C28] transition-colors"
                  >
                    <span>View All Cards</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F28C28]" />
                  </a>
                  <Link
                    href={`/services/${category.slug}`}
                    className="text-xs font-bold text-slate-500 hover:text-[#F28C28] underline transition-colors"
                  >
                    Category Page
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
