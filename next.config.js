const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",
  // output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: process.env.CDN_ASSET_URL || undefined,
  i18n,
  images: {
    deviceSizes: [576, 768, 1200],
  },
  rewrites: async () => ({
    fallback: [
      {
        source: "/:path*",
        destination: `/abcd`,
      },
    ],
  }),
};

module.exports = nextConfig;
