import path from "path";
import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: WebpackConfig) {
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        "@": path.resolve(__dirname, "src"),
      },
    };
    return config;
  },
};

export default nextConfig;
