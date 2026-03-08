import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/preorder',
        destination: '/order',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
