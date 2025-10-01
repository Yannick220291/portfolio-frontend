import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ici tu peux activer/désactiver des options
  reactStrictMode: true, // recommandé
  swcMinify: true,       // minification rapide
  devIndicators: {
    buildActivity: true,
  },
  webpack: (config) => {
    // tu peux modifier la config Webpack si besoin
    return config;
  },
};

export default nextConfig;

