"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Compass } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Shield,
      value: "3,850+",
      label: "Bangalore Homes Secured",
      desc: "Balconies, windows, and duct shafts protected with zero accidents",
    },
    {
      icon: Users,
      value: "4.96 / 5.0",
      label: "Neighbour Recommendation",
      desc: "65%+ of our new projects originate from word-of-mouth referrals",
    },
    {
      icon: Award,
      value: "10 Years",
      label: "Signed Warranty Card",
      desc: "Genuine replacement warranty on virgin HDPE and SS316 marine cables",
    },
    {
      icon: Compass,
      value: "5 Zones",
      label: "110+ Localities Covered",
      desc: "Rapid doorstep mobile technicians across North, South, East, West & Central",
    },
  ];

  return (
    <section className="py-16 bg-[#261447] text-white border-b border-[#5C38A1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F28C28]/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F28C28]/20 flex items-center justify-center text-[#F28C28] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-black text-[#F28C28] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-white mt-1">{stat.label}</span>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
