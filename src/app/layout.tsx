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
  metadataBase: new URL("https://yurakamri.uz"),
  openGraph: {
    title: "Yurak Amri - Xayriya Fondi",
    description:
      "Bir yurakdan - ming yurakka nur! O'zbekistonning har bir chekkasida bir oila sizning e'tiboringizni kutmoqda.",
    url: "https://yurakamri.uz",
    siteName: "Yurak Amri",
    images: [
      {
        url: "/yurak_amri.png",
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
    images: ["/yurak_amri.png"],
  },
  icons: {
    icon: "/yurak_amri.png",
    shortcut: "/yurak_amri.png",
    apple: "/yurak_amri.png",
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
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
