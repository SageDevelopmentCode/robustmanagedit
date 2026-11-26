import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { SkipLink } from "@/components/shared/SkipLink";
import { VersionSwitcher } from "@/components/shared/VersionSwitcher";

const geist = Geist({ variable: "--font-head", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V2 · Protected. Productive. Compliant.",
  description: "Managed IT and cybersecurity for Southern California, since 1989. Local engineers, continuous monitoring and compliance expertise.",
  openGraph: { title: "Robust Managed IT: protected, productive, compliant", type: "website" },
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return (
    <div className={`${geist.variable} bg-black font-sans text-white [--font-body:var(--font-head)] [--focus:#f45c43]`}>
      <SkipLink />
      <JsonLd />
      {children}
      <VersionSwitcher />
    </div>
  );
}
