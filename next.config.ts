import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `next build` writes the site to ./out
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
