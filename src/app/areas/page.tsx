import { Metadata } from "next";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "Service Areas Across Bangalore | Koteshwari Safety Nets Coverage in 110+ Localities",
  description:
    "Explore 110+ Bangalore neighborhoods served by Koteshwari Safety Nets. Balcony safety netting, SS316 invisible grills & cloth drying systems with free doorstep inspection.",
  alternates: {
    canonical: "/areas",
  },
  openGraph: {
    title: "Service Areas Across Bangalore | Koteshwari Safety Nets",
    description:
      "Explore 110+ Bangalore neighborhoods served by Koteshwari Safety Nets with same-day doorstep site inspection.",
    url: "https://koteshwarisafetynets.in/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Koteshwari Safety Nets Bangalore Service Areas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas Across Bangalore | Koteshwari Safety Nets",
    description:
      "Explore 110+ Bangalore neighborhoods served by Koteshwari Safety Nets with same-day doorstep site inspection.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  return <AreasClient />;
}
