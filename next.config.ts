/** @type {import('tailwindcss').Config} */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.icons8.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  css: {
    experimental: {
      engine: "oxide", // Enable the Oxide engine
    },
  },
};

export default nextConfig;
