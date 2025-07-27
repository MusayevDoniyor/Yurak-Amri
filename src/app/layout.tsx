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
  icons: {
    icon: "/yurak_amri.webp",
    shortcut: "/yurak_amri.webp",
    apple: "/yurak_amri.webp",
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
        <link rel="preload" href="/yurak_amri.webp" as="image" />
      </head>

      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
