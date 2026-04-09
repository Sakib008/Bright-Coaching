import type { Metadata, Viewport } from 'next';
import "./globals.css"
export const metadata: Metadata = {
  title: 'Bright Minds Coaching | JEE · NEET · CUET · Class 9–12 | New Delhi',
  description: 'Premium coaching for Class 9–12, JEE, NEET, and CUET. Expert faculty, structured batches, test analytics, and 1-on-1 mentoring in New Delhi.',
  keywords: 'coaching institute Delhi, JEE coaching, NEET coaching, CUET coaching, Class 11 12 tuition Delhi',
  openGraph: {
    title: 'Bright Minds Coaching Institute',
    description: 'Structured coaching for serious students. 250+ selections in 2026.',
    type: 'website',
    locale: 'en_IN',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B3C5D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
