import type { Metadata } from 'next';
import { CONTACT_META, CONTACT_DETAILS } from '@/lib/contactData';

import ContactHeader       from '@/components/sections/contact/ContactHeader';
import TrustSignals        from '@/components/sections/contact/TrustSignals';
import ContactSplitSection from '@/components/sections/contact/ContactSplitSection';
import ContactInfoCards    from '@/components/sections/contact/ContactInfoCards';
import StickyContactCTA    from '@/components/sections/contact/StickyContactCTA';
import { Footer, Header } from '@/components/sections';

export const metadata: Metadata = {
  title:       CONTACT_META.title,
  description: CONTACT_META.description,
  keywords:    CONTACT_META.keywords,
  alternates:  { canonical: CONTACT_META.canonical },
  openGraph: {
    title:       CONTACT_META.title,
    description: CONTACT_META.description,
    url:         CONTACT_META.canonical,
    type:        'website',
  },
};

// LocalBusiness JSON-LD — boosts "JEE coaching near me" Google rankings
const LD_JSON = {
  '@context': 'https://schema.org',
  '@type':    'EducationalOrganization',
  name:        'Bright Minds Coaching Institute',
  url:         'https://brightminds.edu',
  description: 'Best JEE and NEET coaching in Delhi. 250+ IIT selections, IIT-educated faculty, 1:12 mentor ratio.',
  telephone:   CONTACT_DETAILS.phone,
  email:       CONTACT_DETAILS.email,
  address: {
    '@type':         'PostalAddress',
    streetAddress:   '12-B, Connaught Place',
    addressLocality: 'New Delhi',
    postalCode:      '110001',
    addressCountry:  'IN',
  },
  geo: { '@type':'GeoCoordinates', latitude:28.6315, longitude:77.2167 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '08:00', closes: '20:00',
  }],
};

export default function ContactPage() {
  return (
    <>
    <Header/>
      {/* Skip link for keyboard users */}
      {/* <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#0B3C5D] focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        Skip to main content
      </a> */}

      {/* LocalBusiness structured data */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_JSON) }} />

      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero — H1, sub, urgency */}
        <div className='m-4 '>

        <ContactHeader />

        {/* 2. Count-up stats — builds trust before form */}
        <TrustSignals />
        </div>

        {/* 3. Split — Form (left) + Map (right) */}
        <ContactSplitSection />

        {/* 4. Info cards — phone, address, email, hours */}
        <ContactInfoCards />

        {/* 5. Mobile sticky CTA — always visible */}
        <StickyContactCTA />
      </main>
      <Footer/>
    </>
  );
}
