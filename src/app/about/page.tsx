import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, Building2, Users2, Award } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Our Local Family Business | Koteshwari Safety Nets Bangalore",
  description:
    "Discover Koteshwari Safety Nets, a community-trusted local family enterprise in Bangalore. We deliver honest quotes, zero hidden charges, and certified balcony net & invisible grill installations.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Local Family Business | Koteshwari Safety Nets Bangalore",
    description:
      "Discover Koteshwari Safety Nets, a community-trusted local family enterprise in Bangalore. We deliver honest quotes, zero hidden charges, and certified balcony net & invisible grill installations.",
    url: "https://koteshwarisafetynets.in/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Koteshwari Safety Nets - Local Family Safety Enterprise in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Local Family Business | Koteshwari Safety Nets Bangalore",
    description:
      "Discover Koteshwari Safety Nets, a community-trusted local family enterprise in Bangalore. We deliver honest quotes, zero hidden charges, and certified balcony net & invisible grill installations.",
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Structured JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#4B2E83] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Our Story</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B2E83] bg-[#E6DDF5]/50 px-3.5 py-1.5 rounded-full inline-block self-start border border-[#E6DDF5]">
            Rooted in Bangalore Communities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A Local Family Business Built on Honest Quotes and Reliable Protection
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At Koteshwari Safety Nets, we treat every customer&apos;s home as if it were our own. Operating as a proud neighborhood-grounded family business in Bangalore, our mission is straightforward: safeguard children, pets, and balconies from falls and pest birds without deceptive billing, sub-contracted workers, or broken warranty promises.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#F28C28] shrink-0" />
                <span>Our Heritage of Integrity &amp; Personal Responsibility</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                When high-rise apartment construction surged across Bangalore—from the IT corridors of Whitefield and Bellandur to the residential avenues of Jayanagar and Yelahanka—many homeowners faced a frustrating choice: bulky, prison-like metal grilles that violated RWA norms, or fly-by-night operators who quoted low prices only to inflate the final bill with hidden hardware fees.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our founders started Koteshwari Safety Nets to offer a genuine, community-first alternative. We set out to prove that premium high-altitude safety could be provided with absolute pricing honesty, polite in-house technicians, and authentic after-sales care. Today, over 65% of our daily work comes directly from referrals between neighbors who value our straightforward work ethic.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#E6DDF5]/40 rounded-xl text-[#4B2E83] self-start border border-[#E6DDF5]">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Never Subcontracted</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Our own full-time, background-verified technicians complete every installation, ensuring accountable craftsmanship from start to finish.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#E6DDF5]/40 rounded-xl text-[#4B2E83] self-start border border-[#E6DDF5]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Authentic SS316 Wire</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We never compromise on metallurgy. Every cable is certified SS316 marine-grade stainless steel with molybdenum to resist monsoon oxidation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#E6DDF5]/40 rounded-xl text-[#4B2E83] self-start border border-[#E6DDF5]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">10-Year Guarantee</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We provide a signed physical warranty card and stand ready with prompt neighborhood service whenever your balcony needs maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Operational Metrics (Right) */}
          <div className="lg:col-span-4 bg-[#4B2E83] text-white rounded-3xl p-6 sm:p-8 border border-[#5C38A1] flex flex-col gap-6 shadow-xl">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#F28C28]" />
              <span>Community Trust Record</span>
            </h3>

            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Community Standing</span>
                <span className="text-xs font-bold text-[#FFA756] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  Local Family Run Since Inception
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Homes Protected</span>
                <span className="text-xs font-bold text-[#FFA756] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  3,850+ Bangalore Families Secured
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Neighbor Recommendations</span>
                <span className="text-xs font-bold text-[#FFA756] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  65%+ Word-Of-Mouth Projects
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Billing Integrity</span>
                <span className="text-xs font-bold text-[#FFA756] uppercase bg-white/10 border border-white/10 px-3 py-1.5 rounded-md self-start">
                  100% Itemized &bull; Zero Hidden Costs
                </span>
              </div>
            </div>

            <p className="text-slate-200 text-[11px] leading-relaxed pt-2 border-t border-white/10">
              When you call Koteshwari Safety Nets, you speak directly with our dedicated Bangalore service team. We take personal pride in securing your family&apos;s peace of mind.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
