import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yurak Amri - Xayriya Fondi | Bir yurakdan - ming yurakka nur!",
  description:
    "O'zbekistonning har bir chekkasida bir oila sizning e'tiboringizni kutmoqda. Yurak Amri bilan siz bevosita o'zgarish yasay olasiz.",
  keywords:
    "xayriya, fond, yordam, oila, O'zbekiston, Yurak Amri, charity, help, family",
  authors: [{ name: "Yurak Amri" }],
  creator: "Yurak Amri",
  publisher: "Yurak Amri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yurak-amri-three.vercel.app/"),
  openGraph: {
    title: "Yurak Amri - Xayriya Fondi",
    description:
      "Bir yurakdan - ming yurakka nur! O'zbekistonning har bir chekkasida bir oila sizning e'tiboringizni kutmoqda.",
    url: "https://yurak-amri-three.vercel.app/",
    siteName: "Yurak Amri",
    images: [
      {
        url: "/yurak_amri.webp",
        width: 1200,
        height: 630,
        alt: "Yurak Amri Logo",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yurak Amri - Xayriya Fondi",
    description: "Bir yurakdan - ming yurakka nur!",
    images: ["/yurak_amri.webp"],
  },
  icons: {
    icon: "/yurak_amri.webp",
    shortcut: "/yurak_amri.webp",
    apple: "/yurak_amri.webp",
  },
  manifest: "/manifest.json",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/yurak_amri.webp" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Optimize fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Yurak Amri" />
        <link rel="apple-touch-icon" href="/yurak_amri.webp" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
