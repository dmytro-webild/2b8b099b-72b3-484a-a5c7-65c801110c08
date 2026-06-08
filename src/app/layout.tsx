import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Oxin International Group | Global Admissions, Tourism & Car Rental',
  description: 'Oxin International Group offers expert student consultancy, seamless admissions, unforgettable tourism experiences, and reliable car rentals in UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa.',
  keywords: ["student admissions, student consultancy, tourism, rent a car, UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, South Africa, global education, travel, international group"],
  openGraph: {
    "title": "Oxin International Group | Global Admissions, Tourism & Car Rental",
    "description": "Oxin International Group offers expert student consultancy, seamless admissions, unforgettable tourism experiences, and reliable car rentals in UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa.",
    "url": "https://www.oxin-international.com",
    "siteName": "Oxin International Group",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/full-shot-friends-traveling-together_52683-126499.jpg",
        "alt": "Students with luggage and global map"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Oxin International Group | Global Admissions, Tourism & Car Rental",
    "description": "Oxin International Group offers expert student consultancy, seamless admissions, unforgettable tourism experiences, and reliable car rentals in UAE, Georgia, Armenia, Uzbekistan, Kyrgyzstan, and South Africa.",
    "images": [
      "http://img.b2bpic.net/free-photo/full-shot-friends-traveling-together_52683-126499.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
