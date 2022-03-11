/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This will create a folder at .next/standalone which can then be deployed on it's own without installing node_modules.
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
