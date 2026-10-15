import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["@icon-park/react", "three", "@react-three/fiber"],
};

export default nextConfig;
