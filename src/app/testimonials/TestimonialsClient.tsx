"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Phone,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  serviceName: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ananya & Karthik Sundaram",
    location: "Prestige Shantiniketan, Whitefield",
    rating: 5,
    date: "September 2026",
    category: "invisible-grills",
    serviceName: "Balcony Invisible Grills",
    comment:
      "We moved into the 22nd floor and were deeply concerned about our twin toddlers near the balcony railing. Koteshwari Safety Nets gave us an upfront laser measurement with zero hidden hardware fees. The marine SS316 cables look almost invisible and the tension is rock-solid. True peace of mind!",
  },
  {
    id: 2,
    name: "Pradeep Venkatraman",
    location: "Sobha Silicon Oasis, Electronic City",
    rating: 5,
    date: "August 2026",
    category: "safety-nets",
    serviceName: "Childproof Balcony Safety Nets",
    comment:
      "What stood out was their honesty. Another vendor tried adding extra charges for anchor bolts at the last minute, so we called Koteshwari instead. Their local technician arrived within 45 minutes, quoted an all-inclusive price, and finished with clean vacuum drilling. Highly recommended local family business!",
  },
  {
    id: 3,
    name: "Nandini Kulkarni",
    location: "Ranka Colony, Bannerghatta Road",
    rating: 5,
    date: "July 2026",
    category: "safety-nets",
    serviceName: "Pigeon Netting & Spikes",
    comment:
      "Pigeons were destroying our utility area and nesting on AC pipes. Koteshwari Safety Nets fitted translucent UV-treated mesh with stainless spikes. Three months in, our balcony remains spotless and bird-free without any ugly dark netting.",
  },
  {
    id: 4,
    name: "Rajeshwari & Sridhar Bhat",
    location: "Brigade Gateway, Rajajinagar",
    rating: 5,
    date: "August 2026",
    category: "cloth-hangers",
    serviceName: "Dual-Pulley Ceiling Cloth Hangers",
    comment:
      "The 6-pipe stainless steel drying system completely freed up our balcony walkway. Even with wet heavy bedsheets, the dual-pulley mechanism lifts effortlessly with one hand. Their technicians explained everything patiently and left the site immaculate.",
  },
  {
    id: 5,
    name: "Wing Commander V.K. Murthy (Retd.)",
    location: "Godrej Platinum, Hebbal",
    rating: 5,
    date: "July 2026",
    category: "invisible-grills",
    serviceName: "SS316 Balcony Invisible Grills",
    comment:
      "Living next to Hebbal lake means fierce wind gusts. We needed genuine structural safety that our apartment association would approve. The SS316 marine-grade cable work done by Koteshwari Safety Nets is neat, certified, and backed by a genuine 10-year warranty card.",
  },
  {
    id: 6,
    name: "Archana & Deepankar Sen",
    location: "Adarsh Palm Retreat, Bellandur",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Claw-Proof Pet Safety Nets",
    comment:
      "Our golden retriever loves watching birds from our 9th floor balcony. Koteshwari fitted heavy-duty knotted netting that resists claws and heavy weight. Courteous technicians, punctual arrival, and genuine after-sales follow-up two weeks later!",
  },
  {
    id: 7,
    name: "Dr. Bharath Gowda",
    location: "Salarpuria Sattva Cadenza, Kudlu Gate",
    rating: 5,
    date: "August 2026",
    category: "invisible-grills",
    serviceName: "Children Invisible Grills",
    comment:
      "With a 4-year-old child at home, balcony safety was our immediate priority. The 2-inch spacing of Koteshwari's invisible grills completely sealed the danger intervals without making our apartment feel closed in. Great family service!",
  },
  {
    id: 8,
    name: "Shruthi Narayan",
    location: "Mantri Tranquil, Kanakapura Road",
    rating: 5,
    date: "July 2026",
    category: "cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    comment:
      "Our utility balcony was always cluttered with folding clothes racks. The ceiling pulley installation took less than two hours and reclaimed 100% of our floor space. High quality stainless steel that hasn't shown a speck of rust.",
  },
  {
    id: 9,
    name: "Arvind Krishna",
    location: "Purva Seasons, CV Raman Nagar",
    rating: 5,
    date: "June 2026",
    category: "invisible-grills",
    serviceName: "Window Invisible Grills",
    comment:
      "Replaced our heavy, rusted iron window bars with sleek SS316 wire grills. The room gets so much more natural morning light and fresh air now. Honest pricing and polite local crew.",
  },
  {
    id: 10,
    name: "Sumitra Reddy",
    location: "Brigade Millennium, JP Nagar 7th Phase",
    rating: 5,
    date: "May 2026",
    category: "safety-nets",
    serviceName: "Pigeon Safety Nets",
    comment:
      "Our building association recommended Koteshwari Safety Nets. The translucent netting blends in with the wall color and completely stops pigeons from nesting without looking unsightly from the ground.",
  },
  {
    id: 11,
    name: "Manoj & Tejaswini Kulkarni",
    location: "Total Environment Windmills, Whitefield",
    rating: 5,
    date: "June 2026",
    category: "invisible-grills",
    serviceName: "Balcony Invisible Grills",
    comment:
      "We live in a luxury duplex apartment and needed safety cables that matched premium architecture. Koteshwari used flawless diamond drilling and hidden anodized aluminium tracks. The finish is stunning.",
  },
  {
    id: 12,
    name: "D.S. Nagaraj",
    location: "Tata Promont, Banashankari",
    rating: 5,
    date: "May 2026",
    category: "safety-nets",
    serviceName: "Balcony Safety Nets",
    comment:
      "Prompt response on WhatsApp, transparent quotation on arrival, and meticulous tensioning across our wide terrace balcony. Honest family business that delivers on its promises.",
  },
];

export default function TestimonialsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#4B2E83] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Community Feedback</span>
        </nav>

        {/* Page Hero Heading */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E83] bg-[#E6DDF5]/50 px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E6DDF5]">
            Neighbour Recommendations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Verified Reviews from Bangalore Families &amp; RWAs
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read authentic feedback from apartment residents, pet lovers, parents, and gated communities across Bangalore who trust Koteshwari Safety Nets for honest pricing and dependable safety.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-slate-200">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#4B2E83] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-[#E6DDF5]/40 border border-slate-200"
            }`}
          >
            All Reviews ({testimonialsData.length})
          </button>
          <button
            onClick={() => setActiveCategory("safety-nets")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "safety-nets"
                ? "bg-[#4B2E83] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-[#E6DDF5]/40 border border-slate-200"
            }`}
          >
            Safety &amp; Pigeon Nets
          </button>
          <button
            onClick={() => setActiveCategory("invisible-grills")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "invisible-grills"
                ? "bg-[#4B2E83] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-[#E6DDF5]/40 border border-slate-200"
            }`}
          >
            SS316 Invisible Grills
          </button>
          <button
            onClick={() => setActiveCategory("cloth-hangers")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "cloth-hangers"
                ? "bg-[#4B2E83] text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-[#E6DDF5]/40 border border-slate-200"
            }`}
          >
            Ceiling Drying Hangers
          </button>
        </div>

        {/* Testimonials Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#4B2E83]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F28C28]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#4B2E83] bg-[#E6DDF5]/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {review.serviceName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#4B2E83] transition-colors">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                    <MapPin className="w-3 h-3 text-[#F28C28]" />
                    <span>{review.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bottom Banner */}
        <div className="bg-[#4B2E83] text-white rounded-3xl p-8 sm:p-10 mb-16 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F28C28] text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Neighbourhood Reputation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready for an Honest, Free Balcony Inspection?
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-2 max-w-xl">
              We visit your apartment with laser measures and physical samples. Transparent itemized quote, zero hidden costs, and zero booking fee.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919901102266"
              className="bg-[#F28C28] hover:bg-[#FFA756] text-slate-950 font-black px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9901102266</span>
            </a>
            <a
              href="https://wa.me/919901102266?text=Hi%20Koteshwari%20Safety%20Nets%2C%20I%20would%20like%20to%20request%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <ContactForm />
      </div>
    </div>
  );
}
