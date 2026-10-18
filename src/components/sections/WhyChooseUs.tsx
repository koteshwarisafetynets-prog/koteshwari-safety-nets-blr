"use client";

import { motion } from "framer-motion";
import { Receipt, Users, HeartHandshake, Star, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const frameworkCards = [
    {
      icon: Receipt,
      tag: "Price Transparency",
      title: "Honest Quotes (Zero Hidden Charges)",
      desc: "We measure your balcony with precision lasers right before your eyes. Every quotation is clearly itemized per square foot—including anchors, hardware, and installation. What we quote is exactly what you pay, with zero unexpected settlement surcharges.",
      points: [
        "Transparent square-foot pricing",
        "Free doorstep laser measurement",
        "Clear itemized bill with no surprises",
      ],
    },
    {
      icon: Users,
      tag: "In-House Riggers",
      title: "Dedicated Local Team (No Subcontractors)",
      desc: "We never sub-contract your family's safety to unverified day laborers. Our full-time, polite technicians live locally across Bangalore's neighborhoods, trained thoroughly in high-rise rope access, dust-free diamond drilling, and safety harness protocol.",
      points: [
        "100% in-house background-checked staff",
        "Rope access & harness certified",
        "Vacuum cleaning of masonry dust",
      ],
    },
    {
      icon: HeartHandshake,
      tag: "Reliable Support",
      title: "Genuine After-Sales Care & 10-Yr Warranty",
      desc: "Our commitment extends years beyond installation day. Every project includes a signed 10-year warranty card. If you ever need cable retensioning, pest inspection, or modifications during home painting, our local team arrives quickly without disputes.",
      points: [
        "Signed 10-year physical warranty card",
        "Rapid callback & retensioning service",
        "Direct family-run customer support",
      ],
    },
    {
      icon: Star,
      tag: "Community Trust",
      title: "Neighbour Recommendations & RWA Trust",
      desc: "Over 65% of our projects come from word-of-mouth referrals among apartment residents, gated communities, and family groups across Bangalore. Our reputation is our greatest asset, earned one secure balcony at a time.",
      points: [
        "3,850+ Bangalore homes secured",
        "Recommended by 40+ Apartment RWAs",
        "4.96/5.0 verified community rating",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#E6DDF5]/60 text-[#4B2E83] border border-[#E6DDF5] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center">
            <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>The Koteshwari Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Bangalore Families Trust Our Family Business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We built Koteshwari Safety Nets on four honest principles. We believe home safety shouldn&apos;t come with deceptive pricing, subcontracted workers, or disappearing after-sales service.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworkCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-[#4B2E83] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#4B2E83] group-hover:bg-[#F28C28] flex items-center justify-center text-white transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-extrabold text-[#4B2E83] bg-[#E6DDF5]/40 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4B2E83] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-points */}
                <div className="pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
