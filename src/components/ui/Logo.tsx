import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  stacked?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  light = false,
  stacked = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Link
        href="/"
        className={`flex items-center select-none group ${className}`}
        aria-label="Koteshwari Safety Nets Home"
      >
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="logoTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B2E83" />
                <stop offset="100%" stopColor="#321E59" />
              </linearGradient>
              <linearGradient id="logoAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA756" />
                <stop offset="100%" stopColor="#F28C28" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="28" fill="url(#logoTealGrad)" />
            <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoAmberGrad)" strokeWidth="3" opacity="0.85" />
            <line x1="30" y1="24" x2="30" y2="76" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            <line x1="33" y1="52" x2="68" y2="28" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            <line x1="45" y1="44" x2="70" y2="76" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
            <circle cx="68" cy="28" r="4.5" fill="url(#logoAmberGrad)" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 select-none group ${className}`}
      aria-label="Koteshwari Safety Nets Home"
    >
      {/* Monogram Badge */}
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="logoBadgeTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4B2E83" />
              <stop offset="100%" stopColor="#321E59" />
            </linearGradient>
            <linearGradient id="logoBadgeAmber" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA756" />
              <stop offset="100%" stopColor="#F28C28" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="28" fill="url(#logoBadgeTeal)" />
          <rect x="4" y="4" width="92" height="92" rx="24" fill="none" stroke="url(#logoBadgeAmber)" strokeWidth="3" opacity="0.85" />
          <line x1="30" y1="24" x2="30" y2="76" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <line x1="33" y1="52" x2="68" y2="28" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <line x1="45" y1="44" x2="70" y2="76" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          <circle cx="68" cy="28" r="4.5" fill="url(#logoBadgeAmber)" />
        </svg>
      </div>

      {/* Clean Text Typography */}
      <div className={`flex flex-col ${stacked ? "text-center" : "text-left"}`}>
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-[#4B2E83]"}`}>
            KOTESHWARI
          </span>
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#F28C28]">
            SAFETY
          </span>
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${light ? "text-slate-300" : "text-[#4A4A4A]"}`}>
          Nets Bangalore
        </span>
      </div>
    </Link>
  );
}
