import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { SkipLink } from "@/components/shared/SkipLink";
import { VersionSwitcher } from "@/components/shared/VersionSwitcher";

const archivo = Archivo({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "V3 · Managed IT, Cybersecurity & Compliance for Southern California",
  description: "Free cyber risk assessment, HIPAA and DoD compliance, and managed IT from a Whittier team serving Southern California since 1989.",
  openGraph: { title: "Robust Managed IT: managed IT, cybersecurity and compliance", type: "website" },
};

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return (
    <div className={`${archivo.variable} bg-white font-sans text-[#1f2937] [--focus:#eb0b45]`}>
      <SkipLink />
      <JsonLd />
      {children}
      <VersionSwitcher />
    </div>
  );
}
