import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { HEADSHOT_PATH } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chien | Practical AI for Real Life",
  description:
    "Technologist helping people and businesses use AI in practical, human ways — from everyday workflows to creative ideas and small business support.",
  openGraph: {
    title: "Chien | Practical AI for Real Life",
    description:
      "Technologist helping people and businesses use AI in practical, human ways.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: HEADSHOT_PATH,
        width: 800,
        height: 800,
        alt: "Chien",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Chien | Practical AI for Real Life",
    description:
      "Technologist helping people and businesses use AI in practical, human ways.",
    images: [HEADSHOT_PATH],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
