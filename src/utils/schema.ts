export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_BANGALORE = [
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Electronic City",
  "Marathahalli",
  "Jayanagar",
  "Yelahanka",
  "JP Nagar",
  "Bannerghatta Road",
  "Sarjapur Road",
  "BTM Layout",
  "Hebbal",
  "RHSR Layout",
];

export const CITIES_ANDHRA_PRADESH = CITIES_BANGALORE; // Backwards compatibility alias

export const ALL_19_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Practice Nets",
  "Sports Netting",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Mosquito Nets for Windows & Balconies",
  "Balcony Invisible Grills",
  "Children Invisible Grills",
  "Pet Invisible Grills",
  "Window Invisible Grills",
  "Staircase & Duplex Invisible Grills",
  "Ceiling Cloth Drying Hangers",
  "Balcony Cloth Drying Hangers",
  "Wall Mounted Cloth Hangers",
];

export const ALL_18_SERVICES = ALL_19_SERVICES; // Backwards compatibility

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Koteshwari Safety Nets",
    "url": "https://koteshwarisafetynets.in",
    "logo": "https://koteshwarisafetynets.in/images/logo/koteshwari-safety-nets-logo-light.svg",
    "image": "https://koteshwarisafetynets.in/images/og-image.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 99011 02266",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
      },
    ],
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `https://koteshwarisafetynets.in/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `Koteshwari Safety Nets - ${areaName}` : "Koteshwari Safety Nets",
    "url": areaName
      ? `https://koteshwarisafetynets.in/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : "https://koteshwarisafetynets.in",
    "telephone": "+91 99011 02266",
    "email": "koteshwarisafetynets@gmail.com",
    "image": "https://koteshwarisafetynets.in/images/og-image.webp",
    "logo": "https://koteshwarisafetynets.in/images/logo/koteshwari-safety-nets-logo-light.svg",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName ? `${areaName}, Bangalore, Karnataka` : "Bangalore, Karnataka",
      "addressLocality": areaName || "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bangalore, Karnataka`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_18_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Koteshwari Safety Nets",
          },
        },
        "position": idx + 1,
      })),
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "sameAs": [
      "https://facebook.com/koteshwarisafetynetsbangalore",
      "https://instagram.com/koteshwarisafetynetsbangalore",
      "https://wa.me/919901102266",
    ],
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in Bangalore`,
    "description": `Top-rated ${serviceName.toLowerCase()} and certified installation by Koteshwari Safety Nets across Bangalore, Karnataka.`,
    "brand": {
      "@type": "Brand",
      "name": "Koteshwari Safety Nets",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "url": `https://koteshwarisafetynets.in/services/${serviceSlug}`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.95",
      "reviewCount": "240",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Koteshwari Safety Nets",
    "url": "https://koteshwarisafetynets.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://koteshwarisafetynets.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `https://koteshwarisafetynets.in${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} by Koteshwari Safety Nets in Bangalore, Karnataka.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Koteshwari Safety Nets",
      "telephone": "+91 99011 02266",
      "email": "koteshwarisafetynets@gmail.com",
      "url": "https://koteshwarisafetynets.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore, Karnataka",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Bangalore, Karnataka",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "180",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateServiceAreaSchema(serviceName: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": `${serviceName} in ${areaName}, Bangalore`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "name": "Koteshwari Safety Nets",
      "telephone": "+91 99011 02266",
      "email": "koteshwarisafetynets@gmail.com",
      "url": "https://koteshwarisafetynets.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${areaName}, Bangalore, Karnataka`,
        "addressLocality": areaName,
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": `${areaName}, Bangalore, Karnataka`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Koteshwari Safety Nets",
    "url": "https://koteshwarisafetynets.in",
    "image": "https://koteshwarisafetynets.in/images/og-image.webp",
    "telephone": "+91 99011 02266",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.96",
      "reviewCount": "385",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `https://koteshwarisafetynets.in/blog/${article.slug}` : "https://koteshwarisafetynets.in",
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || "Koteshwari Safety Nets",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Koteshwari Safety Nets",
        "logo": {
          "@type": "ImageObject",
          "url": "https://koteshwarisafetynets.in/images/logo/koteshwari-safety-nets-logo-light.svg",
        },
      },
      "image": article.image || "https://koteshwarisafetynets.in/images/og-image.webp",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": "https://koteshwarisafetynets.in",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Koteshwari Safety Nets",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Koteshwari Safety Nets",
      "logo": {
        "@type": "ImageObject",
        "url": "https://koteshwarisafetynets.in/images/logo/koteshwari-safety-nets-logo-light.svg",
      },
    },
    "image": image || "https://koteshwarisafetynets.in/images/og-image.webp",
  };
}
