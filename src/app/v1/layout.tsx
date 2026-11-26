import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { JsonLd } from "@/components/shared/JsonLd";
import { SkipLink } from "@/components/shared/SkipLink";
import { VersionSwitcher } from "@/components/shared/VersionSwitcher";

const head = Inter_Tight({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "V1 · We stop breaches before they stop your business",
  description:
    "Managed security and IT for Southern California manufacturers, non-profits, medical practices and financial firms. Local engineers in Whittier since 1989.",
  openGraph: { title: "Robust Managed IT: we stop breaches before they stop your business", type: "website" },
};

export default function V1Layout({ children }: LayoutProps<"/v1">) {
  return (
    <div className={`${head.variable} bg-white font-sans text-neutral-900 [--focus:#f45c43]`}>
      <SkipLink />
      <JsonLd />
      {children}
      <VersionSwitcher />
    </div>
  );
}
