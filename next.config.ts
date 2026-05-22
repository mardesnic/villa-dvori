import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/villa-dvori",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
