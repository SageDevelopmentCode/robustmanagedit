import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Robust Managed IT · Managed IT & Cybersecurity in Southern California",
    template: "%s · Robust Managed IT",
  },
  description:
    "Managed IT, cybersecurity and compliance for SoCal businesses and non-profits. Local technicians in Whittier, CA since 1989. Call (562) 464-3644.",
  robots: { index: false, follow: false }, // design previews — flip on at launch
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
