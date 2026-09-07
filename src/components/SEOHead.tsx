import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  faqSchemaItems?: Array<{ question: string; answer: string }>;
}

export const SEOHead: React.FC<Props> = ({
  title,
  description,
  keywords,
  canonicalPath = '',
  faqSchemaItems = []
}) => {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.businessName}` 
    : `${SITE_CONFIG.businessName} | Medical Store in Aurangabad, Bihar`;

  const metaDesc = description || `${SITE_CONFIG.tagline}. Located at Ramesh Chowk, near Sadar Hospital Aurangabad Bihar. Call or WhatsApp ${SITE_CONFIG.phone}.`;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescriptionEl = document.querySelector('meta[name="description"]');
    if (metaDescriptionEl) {
      metaDescriptionEl.setAttribute('content', metaDesc);
    }

    // Update Open Graph
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', fullTitle);

    let ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', metaDesc);

    // Update Twitter
    let twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) twTitleEl.setAttribute('content', fullTitle);

    let twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) twDescEl.setAttribute('content', metaDesc);

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', `https://vaishalipharmaceutical.com${canonicalPath}`);

    // Insert or update LocalBusiness & Pharmacy JSON-LD
    const pharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": "https://vaishalipharmaceutical.com/#pharmacy",
      "name": SITE_CONFIG.businessName,
      "image": "https://vaishalipharmaceutical.com/icons/icon-512.png",
      "telephone": `+91-${SITE_CONFIG.phone}`,
      "email": SITE_CONFIG.email,
      "url": "https://vaishalipharmaceutical.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.line1,
        "addressLocality": SITE_CONFIG.address.city,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SITE_CONFIG.geo.latitude,
        "longitude": SITE_CONFIG.geo.longitude
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:30"
        }
      ],
      "department": {
        "@type": "MedicalOrganization",
        "name": "Emergency Prescription Dispensation Counter"
      }
    };

    let schemaScript = document.getElementById('jsonld-pharmacy');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-pharmacy';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(pharmacySchema);

    // Optional FAQ schema
    let faqScript = document.getElementById('jsonld-faq');
    if (faqSchemaItems && faqSchemaItems.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchemaItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'jsonld-faq';
        faqScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [fullTitle, metaDesc, canonicalPath, faqSchemaItems]);

  return null;
};
