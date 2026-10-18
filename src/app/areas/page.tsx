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

export default function AreasPage() {
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
        <div className="bg-gradient-to-r from-[#321E59] via-[#4B2E83] to-[#5C38A1] text-white rounded-3xl p-8 sm:p-12 mb-10 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#F28C28] text-xs font-bold uppercase tracking-wider border border-[#F28C28]/30 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5" /> 5 Structured Zones • 110+ Bangalore Neighborhoods
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F28C28] text-white text-xs font-black uppercase tracking-wider shadow-md">
                Transparent Pricing
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-4">
              Zone-Wise Safety Nets &amp; Invisible Grills in Bangalore
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Unlike generic operators, Koteshwari Safety Nets organizes technicians by regional Bangalore zones—ensuring rapid 30-to-60 minute doorstep measurements, zero travel surcharge, and custom fittings matched to each zone&apos;s unique apartment architecture and wind conditions.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                <span>Zero Advance Doorstep Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>10-Year Genuine Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F28C28]" />
                <span>Same-Day Rapid Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Zone Controls */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10 space-y-5">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your Bangalore locality (e.g. Yelahanka, JP Nagar, Whitefield, Rajajinagar, Indiranagar)..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-hidden focus:border-[#4B2E83] focus:ring-2 focus:ring-[#4B2E83]/20 transition-all placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Zone Selector Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {zoneTabOptions.map((tab) => {
              const active = activeZone === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveZone(tab.id);
                    setSearchQuery("");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? "bg-[#4B2E83] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-[#E6DDF5]/40"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Display */}
        {searchResults && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Search Results ({searchResults.length} {searchResults.length === 1 ? "locality" : "localities"} found)
            </h2>
            {searchResults.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
                No Bangalore localities matching &ldquo;{searchQuery}&rdquo;. Call our local team at{" "}
                <a href="tel:+919901102266" className="text-[#4B2E83] font-bold">
                  +91 99011 02266
                </a>{" "}
                for custom doorstep scheduling anywhere in Bangalore.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="p-5 bg-white border border-slate-200 hover:border-[#4B2E83] rounded-2xl shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#F28C28]" />
                        <span className="font-bold text-slate-900 text-sm">{area.name}</span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {area.apartmentLiving}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#4B2E83]">
                      <span>View Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Zone-Based Layout: North, South, East, West, Central */}
        {!searchResults && (
          <div className="space-y-12 mb-16">
            {BANGALORE_ZONES.filter((z) => activeZone === "all" || activeZone === z.id).map((zone) => {
              // Get all areas for this zone
              const zoneAreas = areasList.filter((a) => a.zone === zone.id);

              return (
                <section
                  key={zone.id}
                  id={`zone-${zone.id}`}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
                >
                  {/* Zone Header Block */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C28] mb-1">
                        <Compass className="w-4 h-4" />
                        <span>{zone.tagline}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{zone.name}</h2>
                      <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      <div className="bg-[#E6DDF5]/40 border border-[#E6DDF5] px-4 py-2 rounded-2xl text-center">
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Hubs</span>
                        <span className="text-base font-extrabold text-[#4B2E83]">{zoneAreas.length} Localities</span>
                      </div>
                    </div>
                  </div>

                  {/* Primary Key Areas with Detailed 2-3 Sentence Descriptions */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#4B2E83]" />
                      <span>Primary High-Demand Hubs in {zone.name}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {zone.keyAreas.map((keyArea) => {
                        const areaData = areasData[keyArea.slug];
                        const description = areaData ? areaData.apartmentLiving : "Residential balconies and windows requiring certified safety netting.";

                        return (
                          <Link
                            key={keyArea.slug}
                            href={`/areas/${keyArea.slug}`}
                            className="p-5 bg-[#FAFAFA] hover:bg-[#E6DDF5]/20 border border-slate-200 hover:border-[#4B2E83]/60 rounded-2xl transition-all duration-300 flex flex-col justify-between group shadow-2xs"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0" />
                                <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#4B2E83] transition-colors">
                                  {keyArea.name}
                                </h4>
                              </div>
                              <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                                {description}
                              </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#4B2E83]">
                              <span>View Pricing &amp; Netting</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* All Other Localities in this Zone */}
                  {zoneAreas.length > zone.keyAreas.length && (
                    <div className="pt-6 border-t border-slate-100">
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

        {/* Map & Office Address Placeholder Section */}
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
