import { nextEnv } from "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: nextEnv.publicRuntimeConfig,
  serverRuntimeConfig: nextEnv.serverRuntimeConfig,
};

export default nextConfig;
