"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Sparkles } from "lucide-react";

interface Material {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const materials: Material[] = [
  {
    id: 1,
    name: "UV-Stabilized Virgin HDPE Copolymer Netting",
    image: "/images/materials/koteshwari-balcony-mesh-material.webp",
    specs: [
      "100% Virgin High-Density Polyethylene with UV inhibitors",
      "Calibrated 25mm to 30mm square safety matrix",
      "Dynamic knot-breaking resistance exceeding 140kg",
      "Resistant to high solar exposure and heavy monsoon rains",
    ],
  },
  {
    id: 2,
    name: "Child & Pet High-Tenacity Safety Mesh",
    image: "/images/services/koteshwari-children-safety-nets-bangalore.webp",
    specs: [
      "Multi-filament braided knot reinforcement technology",
      "Non-abrasive skin-friendly texture safe for toddler play",
      "Translucent design preserving high-rise architectural aesthetics",
      "Narrow 15cm border anchor pitch eliminating gaps",
    ],
  },
  {
    id: 3,
    name: "Zero-Visibility Anti-Pigeon Barrier Mesh",
    image: "/images/materials/koteshwari-industrial-factory-safety-nets.webp",
    specs: [
      "Ultra-fine 25mm bird exclusion aperture",
      "Humane physical defense barring pigeons and pest birds",
      "Lightweight monofilament with high tear endurance",
      "Zero maintenance with 7-to-10 year operational lifespan",
    ],
  },
  {
    id: 4,
    name: "High-Impact Sports & Cricket Enclosures",
    image: "/images/materials/koteshwari-box-cricket-netting-bangalore.webp",
    specs: [
      "Heavy 2.5mm - 3.5mm multi-ply braided cords",
      "Absorbs high-velocity leather cricket ball strikes",
      "Reinforced heavy border rope perimeter loops",
      "Engineered for rooftop batting pitches and turf arenas",
    ],
  },
  {
    id: 5,
    name: "SS316 Marine-Grade Stainless Wire Cables",
    image: "/images/materials/koteshwari-hdpe-nylon-net-twine.webp",
    specs: [
      "Genuine 316 marine-grade molybdenum alloy wire core",
      "Crystal-clear transparent DuPont nylon protective coating",
      "Calibrated breaking limit exceeding 400kg per cable line",
      "Ultra-slim 2.5mm to 3.0mm architectural profile",
    ],
  },
  {
    id: 6,
    name: "Certified High-Altitude Rigging Crew",
    image: "/images/materials/koteshwari-ss316-stainless-steel-wire.webp",
    specs: [
      "Full-body harness & rope-access trained technicians",
      "Industrial low-vibration diamond core concrete drilling",
      "Multi-point hydraulic cable tension load testing",
      "HEPA vacuum masonry dust cleanup included",
    ],
  },
  {
    id: 7,
    name: "Structural Powder-Coated Aluminium Tracks",
    image: "/images/materials/koteshwari-anchoring-fasteners-hardware.webp",
    specs: [
      "Heavy-gauge extruded T6 structural aluminium channels",
      "Electrostatically powder-coated weather-shield barrier",
      "Concealed anti-tamper internal locking studs",
      "Precision miter-cut to match balcony profiles",
    ],
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E83] bg-[#FAF7FD] border border-[#D0BFEA] px-3.5 py-1.5 rounded-full inline-block self-center">
            <Sparkles className="w-3.5 h-3.5 inline mr-1.5 text-[#F28C28]" />
            Material Metallurgy &amp; Safety Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B2E83] tracking-tight leading-tight">
            High-Grade Materials Engineered for High-Rise Safety
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Every safety netting mesh, stainless steel cable, and mounting profile installed by Koteshwari Safety Nets is tested for tensile stability and outdoor weather endurance across Bangalore.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#FAFAFA] rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col group hover:shadow-xl hover:border-[#F28C28]/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={`Koteshwari Safety Nets - ${item.name}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={75}
                />
              </div>
              {/* Specifications Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[#4B2E83] mb-3 group-hover:text-[#F28C28] transition-colors">
                  {item.name}
                </h3>
                <ul className="space-y-2.5 flex-grow">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
