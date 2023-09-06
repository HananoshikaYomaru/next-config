// build time validation
import "./src/env.mjs";
import { publicConfig } from "./src/publicConfig.mjs";
import i18n from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    ...i18n.i18n,
  },
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
