import type { NextConfig } from "next";

const isDemo = process.env.DEMO_MODE === "true";

const nextConfig: NextConfig = {
  basePath: isDemo ? "/demo" : ""
  /* reactCompiler: true,  */
};

export default nextConfig;
