"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Compass, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import Link from "next/link";
import { BANGALORE_ZONES, areasData } from "@/utils/areasData";

export default function ServiceAreas() {
  const [selectedZone, setSelectedZone] = useState<string>("north");

  const currentZone = BANGALORE_ZONES.find((z) => z.id === selectedZone) || BANGALORE_ZONES[0];

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-24 scroll-mt-12" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#4B2E83] bg-[#E6DDF5]/60 border border-[#E6DDF5] px-4 py-1.5 rounded-full self-center shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Bangalore Zone-Wise Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Local Technicians Dispatched Across All 5 Bangalore Zones
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every Bangalore neighborhood has distinct architecture—from high-rise wind exposure in the North to leafy heritage enclaves in the South. Explore your local zone for tailored safety solutions with zero hidden costs.
          </p>
        </div>

        {/* Zone Selector Tabs (North, South, East, West, Central) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BANGALORE_ZONES.map((zone) => {
            const isActive = zone.id === selectedZone;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#4B2E83] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-[#E6DDF5]/40 border border-slate-200"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-[#F28C28]" : "text-[#4B2E83]"}`} />
                <span>{zone.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {zone.keyAreas.length} Key Hubs
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Zone Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZone.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
          >
            {/* Zone Headline Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>{currentZone.tagline}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{currentZone.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                  {currentZone.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-bold text-slate-500 block">Dispatch Time</span>
                  <span className="text-xs font-extrabold text-[#4B2E83]">30–60 Min Rapid Arrival</span>
                </div>
                <Link
                  href="/areas"
                  className="bg-[#4B2E83] hover:bg-[#392166] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>All Zone Hubs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Key Areas Grid with 2-3 Sentence Unique Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentZone.keyAreas.map((keyArea, idx) => {
                const areaInfo = areasData[keyArea.slug];
                const desc = areaInfo
                  ? `${areaInfo.apartmentLiving}`
                  : "Residential apartments and homes with open balconies requiring tensioned child safety nets and humane anti-pigeon netting.";

                return (
                  <motion.div
                    key={keyArea.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col justify-between p-5 bg-[#FAFAFA] hover:bg-[#E6DDF5]/20 border border-slate-200 hover:border-[#4B2E83]/40 rounded-2xl transition-all duration-300 group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#F28C28] shrink-0" />
                        <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#4B2E83] transition-colors">
                          {keyArea.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Free Inspection</span>
                      </span>
                      <Link
                        href={`/areas/${keyArea.slug}`}
                        className="font-bold text-[#4B2E83] hover:text-[#F28C28] flex items-center gap-1 transition-colors"
                      >
                        <span>View Area</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#F28C28]" />
                <span>Zero-advance doorstep measurements across every locality in {currentZone.name}.</span>
              </span>
              <Link
                href="/areas"
                className="font-bold text-[#4B2E83] hover:text-[#F28C28] flex items-center gap-1"
              >
                <span>Browse all 110+ Bangalore localities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
