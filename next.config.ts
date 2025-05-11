import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { resolveAlias: { html2canvas: "html2canvas-pro" } },
};

export default nextConfig;
