import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cấu hình port mặc định
  env: {
    PORT: "8000",
  },
  
  // Cấu hình khác
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  
  // Cấu hình images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
