import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "mtek3d.com" },
    ],
  },
};

export default nextConfig;
