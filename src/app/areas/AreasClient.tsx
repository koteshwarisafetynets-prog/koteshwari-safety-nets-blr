"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
  Building2,
  Sparkles,
  Phone,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { BANGALORE_ZONES, areasList, areasData } from "@/utils/areasData";
import MapFrame from "@/components/ui/map-frame";

const zoneTabOptions = [
  { id: "all", name: "All 5 Zones (110+ Localities)" },
  { id: "north", name: "North Bangalore" },
  { id: "south", name: "South Bangalore" },
  { id: "east", name: "East Bangalore" },
  { id: "west", name: "West Bangalore" },
  { id: "central", name: "Central Bangalore" },
];

export default function AreasClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState("all");

  // Filtered areas based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return areasList.filter((area) => {
      const q = searchQuery.toLowerCase();
      return (
        area.name.toLowerCase().includes(q) ||
        area.tagline.toLowerCase().includes(q) ||
        area.localities.some((loc) => loc.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#F28C28] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#4B2E83] font-bold">Bangalore Coverage by Zones</span>
        </nav>

        {/* Hero Banner with Distinct Local Family Positioning */}
        <div className="bg-[#261447] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#5C38A1]/40 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F28C28] text-slate-950 font-black text-xs uppercase tracking-wider mb-4 shadow-md">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Bangalore Footprint</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Service Areas Across <span className="text-[#F28C28]">Bangalore</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Unlike aggregators who farm leads to anonymous handymen, Koteshwari Safety Nets employs dedicated, trained local technician teams assigned to North, South, East, West, and Central Bangalore. We arrive on time with calibrated measurement tools and physical samples.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                <span className="font-semibold">Free Doorstep Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F28C28]" />
                <span className="font-semibold">Same-Day Site Visit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
                <span className="font-semibold">10-Year Written Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Zone Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your Bangalore locality (e.g. Yelahanka, JP Nagar, Whitefield, Rajajinagar, Indiranagar)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-hidden focus:border-[#4B2E83] focus:ring-2 focus:ring-[#4B2E83]/20 transition-all placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#4B2E83] bg-[#E6DDF5]/40 px-4 py-3.5 rounded-2xl shrink-0 justify-center">
              <Building2 className="w-4 h-4 text-[#F28C28]" />
              <span>110+ Active Neighborhoods</span>
            </div>
          </div>

          {/* Zone Selector Tabs (when not searching) */}
          {!searchQuery && (
            <div className="flex items-center gap-2 overflow-x-auto pt-6 mt-6 border-t border-slate-100 scrollbar-none">
              {zoneTabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveZone(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeZone === tab.id
                      ? "bg-[#4B2E83] text-white shadow-md shadow-[#4B2E83]/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH RESULTS VIEW */}
        {searchResults && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Matching Localities ({searchResults.length})
              </h2>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#F28C28] font-bold hover:underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <p className="text-slate-500 text-sm mb-4">
                  No explicit area matched &quot;{searchQuery}&quot;. However, our technicians cover ALL pin codes in Greater Bangalore.
                </p>
                <a
                  href="tel:+919901102266"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#F28C28] hover:bg-[#FFA756] text-slate-950 font-black rounded-full text-xs shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Fast Doorstep Booking: +91 99011 02266</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#F28C28] shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4B2E83] bg-[#E6DDF5]/50 px-2.5 py-1 rounded-md">
                          {area.zone ? `${area.zone.toUpperCase()} BANGALORE` : "BANGALORE REGION"}
                        </span>
                        <MapPin className="w-4 h-4 text-[#F28C28] group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#4B2E83] transition-colors mb-2">
                        {area.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {area.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4B2E83]">
                      <span>View Area Pricing &amp; Netting Services</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DEFAULT ZONE GROUPED VIEW */}
        {!searchQuery && (
          <div className="space-y-12 mb-14">
            {BANGALORE_ZONES.filter((z) => activeZone === "all" || activeZone === z.id).map((zone) => {
              const zoneAreas = areasList.filter((a) => a.zone === zone.id);

              return (
                <section
                  key={zone.id}
                  id={zone.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm scroll-mt-24"
                >
                  {/* Zone Header */}
                  <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#F28C28] bg-[#FAF7FD] px-3 py-1 rounded-full border border-orange-200/50 mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Zone Dispatch Unit</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {zone.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-400 block">Active Localities</span>
                      <span className="text-2xl font-black text-[#4B2E83]">
                        {zoneAreas.length} Areas
                      </span>
                    </div>
                  </div>

                  {/* Key Featured Localities in Zone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {zone.keyAreas.map((keyArea) => {
                      const areaDetail = areasData[keyArea.slug];
                      return (
                        <Link
                          key={keyArea.slug}
                          href={`/areas/${keyArea.slug}`}
                          className="bg-slate-50 hover:bg-[#FAF7FD] rounded-2xl p-5 border border-slate-200/80 hover:border-[#4B2E83]/40 transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-extrabold uppercase text-[#F28C28] tracking-wider">
                                Hub Dispatch
                              </span>
                              <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
                            </div>
                            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#4B2E83] transition-colors mb-1.5">
                              {keyArea.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {areaDetail?.tagline || `Precision safety netting and grills in ${keyArea.name}`}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#4B2E83]">
                            <span>Explore Services</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Full List of Neighborhoods in This Zone */}
                  {zoneAreas.length > zone.keyAreas.length && (
                    <div className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100">
                      <span className="text-xs font-bold text-slate-700 block mb-3">
                        Additional {zone.name} Neighborhoods Served:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {zoneAreas
                          .filter((a) => !zone.keyAreas.some((k) => k.slug === a.slug))
                          .map((extraArea) => (
                            <Link
                              key={extraArea.slug}
                              href={`/areas/${extraArea.slug}`}
                              className="px-3 py-1.5 bg-slate-50 hover:bg-[#E6DDF5]/40 text-slate-700 hover:text-[#4B2E83] border border-slate-200 hover:border-[#4B2E83]/40 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                            >
                              <MapPin className="w-3 h-3 text-[#F28C28]" />
                              <span>{extraArea.name}</span>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* Map & Office Address Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4B2E83] bg-[#E6DDF5]/50 px-3.5 py-1.5 rounded-full self-start">
                Local Presence
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                Doorstep Coverage in Every Bangalore Neighborhood
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our technicians carry official samples, measurement lasers, and tension testing equipment. We visit your apartment, take accurate measurements, and provide an upfront itemized quotation with zero hidden fees.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F28C28]" />
                  <span>Main Service Hub: Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#4B2E83]" />
                  <span>Direct Hotline: +91 99011 02266</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MapFrame areaName="Bangalore, Karnataka" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
