import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic SEO
  title: {
    default:
      "MSc-GoMyCode | Transform Your Career with Professional Coding Bootcamp",
    template: "%s | MSc-GoMyCode",
  },
  description:
    "Join 5,000+ graduates who landed high-paying tech jobs. Master full-stack development, React, Node.js & more in our 6-month coding bootcamp. 95% job placement rate with personalized mentorship.",

  // Keywords for search engines
  keywords: [
    "coding bootcamp",
    "web development course",
    "full stack developer training",
    "React bootcamp",
    "Node.js training",
    "programming bootcamp",
    "tech career change",
    "software development course",
    "JavaScript bootcamp",
    "frontend developer course",
    "backend developer training",
    "job guarantee coding course",
    "online coding bootcamp",
    "web developer certification",
    "MSc GoMyCode",
  ],

  // Author and creator info
  authors: [{ name: "MSc-GoMyCode Team" }],
  creator: "MSc-GoMyCode",
  publisher: "MSc-GoMyCode",

  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msc-gomycode.com",
    siteName: "MSc-GoMyCode",
    title: "MSc-GoMyCode | Professional Coding Bootcamp with Job Guarantee",
    description:
      "Transform your career in 6 months. Join our coding bootcamp with 95% job placement rate, 1-on-1 mentorship, and $75k average starting salary.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MSc-GoMyCode Coding Bootcamp - Transform Your Career",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MSc-GoMyCode | Professional Coding Bootcamp",
    description:
      "Master coding in 6 months. 95% job placement rate. Start your tech career today!",
    site: "@MScGoMyCode",
    creator: "@MScGoMyCode",
    images: ["/twitter-image.jpg"],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://msc-gomycode.com",
  },

  // App-specific metadata
  applicationName: "MSc-GoMyCode",
  category: "Education",

  // Additional verification and analytics
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Other meta tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "MSc-GoMyCode",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#2563eb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional head elements for better SEO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MSc-GoMyCode",
              description:
                "Professional coding bootcamp with job guarantee and personalized mentorship",
              url: "https://msc-gomycode.com",
              logo: "https://msc-gomycode.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://twitter.com/MScGoMyCode",
                "https://linkedin.com/company/msc-gomycode",
                "https://github.com/msc-gomycode",
              ],
              offers: {
                "@type": "Offer",
                category: "Education",
                description: "Full Stack Development Bootcamp",
                priceRange: "$$",
              },
            }),
          }}
        />

        {/* Course structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Full Stack Development Bootcamp",
              description:
                "Comprehensive 6-month coding bootcamp covering React, Node.js, databases, and more",
              provider: {
                "@type": "Organization",
                name: "MSc-GoMyCode",
              },
              courseMode: "Online",
              educationalCredentialAwarded: "Professional Certificate",
              timeRequired: "P6M",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1500",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
