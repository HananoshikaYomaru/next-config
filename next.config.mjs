// build time validation
import "./src/env.mjs";
import { publicConfig } from "./src/publicConfig.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/test",
        has: [
          {
            type: "cookie",
            key: publicConfig.id,
          },
        ],
        permanent: false,
        destination: "/home",
      },
    ];
  },
};

export default nextConfig;
