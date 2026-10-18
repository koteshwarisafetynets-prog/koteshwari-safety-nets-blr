"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is your pricing calculated, and are there any hidden charges added during installation?",
      answer:
        "We follow an honest, transparent per-square-foot pricing policy with zero hidden charges. During our free doorstep visit, our technician measures your balcony with digital laser tools right in front of you and hands you an itemized quote. That price covers 100% of the project: virgin polymer mesh or SS316 cables, stainless anchors, high-rise rigging labor, and cleanup. We never add surprise fees for clamps, elevation, or travel.",
    },
    {
      question: "How do I maintain my safety nets or invisible grills, and do you offer routine maintenance visits?",
      answer:
        "Maintenance is simple and hassle-free. For invisible grills, an occasional wipe with a soft damp cloth keeps the nylon coating sparkling; for safety nets, a gentle spray with regular water removes accumulated city dust. If you ever need cable re-tensioning, net unhooking for balcony repainting, or an annual structural checkup, our local Bangalore team provides prompt support under your 10-year warranty.",
    },
    {
      question: "Why do some operators quote unrealistically cheap rates, and how does Koteshwari ensure genuine quality?",
      answer:
        "Unregulated vendors often lure customers with rock-bottom rates, only to bill extra for essential screws and anchors, or worse, substitute cheap SS201/304 steel that begins rusting within one monsoon season. Koteshwari Safety Nets operates as a trusted local family business. We exclusively use certified molybdenum-rich SS316 marine wire and virgin UV-treated polymers, backed by an official 10-year physical warranty card and a reputation we fiercely protect.",
    },
    {
      question: "How quickly can your neighborhood technicians visit our apartment for measurements?",
      answer:
        "Because our technicians live and operate locally across Bangalore's North, South, East, West, and Central zones, we typically arrive within 30 to 60 minutes for free doorstep laser measurements. We bring real physical material samples so you can touch and compare cable thicknesses before making any commitment.",
    },
    {
      question: "Are Koteshwari safety nets and invisible grills approved by Bangalore Apartment RWAs?",
      answer:
        "Yes, absolutely. Unlike obsolete heavy iron bars that alter building facades and are banned by most Resident Welfare Associations (RWAs), our invisible grills preserve architectural uniformity while keeping children and pets completely safe. We have successfully secured flats across over 40 major Bangalore apartment complexes.",
    },
    {
      question: "How much weight can your balcony safety netting and invisible cables withstand?",
      answer:
        "Our knotted high-density polymer safety nets hold a certified point load exceeding 140kg, while our SS316 marine invisible cables withstand dynamic tensile forces over 400kg. They easily resist energetic dogs, clawing cats, and accidental toddler collisions without sagging or yielding.",
    },
    {
      question: "How does your anti-pigeon netting eliminate bird nuisances without harming pigeons?",
      answer:
        "Our approach is 100% humane. We install translucent, micro-aperture UV-stabilized netting that forms a physical barrier pigeons cannot penetrate. Birds simply fly elsewhere without getting trapped or injured, leaving your balcony, AC ledges, and laundry areas completely clean and sanitary.",
    },
    {
      question: "What happens in an emergency if someone needs quick exit through the balcony?",
      answer:
        "Safety is paramount in both directions. While invisible grills prevent accidental falls, every household is provided with guidance and an emergency wire cutter that can sever the cables within seconds during a fire or evacuation, providing a rapid exit pathway.",
    },
    {
      question: "Can individual drying rods on your ceiling cloth hangers be operated separately?",
      answer:
        "Yes! Each stainless steel rod operates on its own dedicated dual-pulley nylon rope and locking cleat. You can lower a single rod to chest level to hang heavy bedsheets while leaving the remaining rods suspended at ceiling height, preserving 100% of your usable balcony floor space.",
    },
    {
      question: "How do I claim my 10-year warranty if I notice any issue years later?",
      answer:
        "Simply call our direct hotline at +91 99011 02266 with your apartment name or phone number. We maintain digital records of every home we fit. As a community-rooted family business, we treat after-sales service with the highest urgency and dispatch a technician promptly to resolve any concern.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#E6DDF5]/60 text-[#4B2E83] border border-[#E6DDF5] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center">
            <HelpCircle className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Transparent, straightforward answers regarding our pricing, materials, installation protocols, and dedicated after-sales care.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-[#FAFAFA] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#4B2E83] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#4B2E83] text-white rotate-180" : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Help Block */}
        <div className="mt-12 p-8 rounded-3xl bg-[#E6DDF5]/30 border border-[#E6DDF5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-[#4B2E83]">Have a specific apartment layout question?</h3>
            <p className="text-xs text-slate-600 mt-1">
              Speak directly with our local family team for straightforward advice and honest quotes.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919901102266"
              className="bg-[#4B2E83] hover:bg-[#392166] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Call 9901102266</span>
            </a>
            <a
              href="https://wa.me/919901102266?text=Hi%20Koteshwari%20Safety%20Nets%2C%20I%20have%20a%20question%20about%20safety%20net%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
