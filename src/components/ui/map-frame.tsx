"use client";

interface MapFrameProps {
  areaName?: string;
  className?: string;
}

export default function MapFrame({ areaName = "Bangalore, Karnataka", className = "" }: MapFrameProps) {
  // Safe embed of Bangalore local area placeholder map
  const mapSearchUrl = `https://maps.google.com/maps?q=Bangalore%20Karnataka%20${encodeURIComponent(
    areaName
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`relative w-full h-[350px] rounded-3xl overflow-hidden shadow-xs border border-slate-200 ${className}`}>
      <iframe
        title={`Koteshwari Safety Nets Service Coverage Map - ${areaName}`}
        src={mapSearchUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full filter contrast-[0.95]"
      ></iframe>
    </div>
  );
}
