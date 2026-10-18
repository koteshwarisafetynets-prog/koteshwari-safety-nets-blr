"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, Sparkles, HeartHandshake } from "lucide-react";

export default function CustomerReviews() {
  const testimonials = [
    {
      name: "Ananya & Karthik Sundaram",
      locality: "Prestige Shantiniketan, Whitefield",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "September 2026",
      comment:
        "We moved into the 22nd floor and were deeply concerned about our twin toddlers near the railing. Koteshwari Safety Nets gave us an upfront laser measurement with zero hidden hardware fees. The marine SS316 cables look almost invisible and the tension is remarkably solid. True peace of mind!",
    },
    {
      name: "Pradeep Venkatraman",
      locality: "Sobha Silicon Oasis, Electronic City",
      service: "Childproof Balcony Safety Nets",
      rating: 5,
      date: "August 2026",
      comment:
        "What stood out was their honesty. Another vendor tried adding extra charges for anchor bolts at the last minute, so we called Koteshwari instead. Their local technician arrived within 45 minutes, quoted an all-inclusive price, and finished with clean vacuum drilling. Highly recommended local family business!",
    },
    {
      name: "Nandini Kulkarni",
      locality: "Ranka Colony, Bannerghatta Road",
      service: "Pigeon Netting & Spikes",
      rating: 5,
      date: "July 2026",
      comment:
        "Pigeons were destroying our utility area and nesting on AC pipes. Koteshwari Safety Nets fitted translucent UV-treated mesh with stainless spikes. Three months in, our balcony remains spotless and bird-free without any ugly dark netting.",
    },
    {
      name: "Rajeshwari & Sridhar Bhat",
      locality: "Brigade Gateway, Rajajinagar",
      service: "Dual-Pulley Ceiling Cloth Hangers",
      rating: 5,
      date: "August 2026",
      comment:
        "The 6-pipe stainless steel drying system completely freed up our balcony walkway. Even with wet heavy bedsheets, the dual-pulley mechanism lifts effortlessly with one hand. Their technicians explained everything patiently and left the site immaculate.",
    },
    {
      name: "Wing Commander V.K. Murthy (Retd.)",
      locality: "Godrej Platinum, Hebbal",
      service: "SS316 Balcony Invisible Grills",
      rating: 5,
      date: "July 2026",
      comment:
        "Living next to Hebbal lake means fierce wind gusts. We needed genuine structural safety that our apartment association would approve. The SS316 marine-grade cable work done by Koteshwari Safety Nets is neat, certified, and backed by a genuine 10-year warranty card.",
    },
    {
      name: "Archana & Deepankar Sen",
      locality: "Adarsh Palm Retreat, Bellandur",
      service: "Claw-Proof Pet Safety Nets",
      rating: 5,
      date: "June 2026",
      comment:
        "Our golden retriever loves watching birds from our 9th floor balcony. Koteshwari fitted heavy-duty knotted netting that resists claws and heavy weight. Courteous technicians, punctual arrival, and genuine after-sales follow-up two weeks later!",
    },
  ];

  return (
    <section className="py-24 bg-[#261447] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#F28C28]/20 border border-[#F28C28]/40 text-[#FFA756] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center">
            <HeartHandshake className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Community Verified Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Neighbour Recommendations from Real Bangalore Homes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Over 65% of our daily installations come through neighbor-to-neighbor referrals across Bangalore&apos;s apartment communities. Here is what families say about our honest service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-7 rounded-3xl bg-[#392166] border border-[#5C38A1]/60 flex flex-col justify-between hover:border-[#F28C28] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F28C28]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#5C38A1] group-hover:text-[#F28C28] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#5C38A1]/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">{review.name}</h3>
                  <div className="flex items-center gap-1 text-slate-300 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 text-[#F28C28]" />
                    <span>{review.locality}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#FFA756] bg-white/10 px-2 py-1 rounded-md block border border-white/10">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
