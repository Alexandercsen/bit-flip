import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep agent instruction files out of the project tree.
  agentRules: false,
};

export default nextConfig;
