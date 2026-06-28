import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable static HTML export (required for GitHub Pages)
  output: "export",

  // 2. Set the subfolder path (Must match your GitHub repository name exactly)
  basePath: "/portfolio",

  // 3. Optimizes asset loading under the subfolder path
  assetPrefix: "/portfolio/",

  // 4. Disable dynamic image optimization since GitHub Pages is a static host
  images: {
    unoptimized: true,
  },
};

export default nextConfig;