// next.config.js
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },
  experimental: {
    serverActions: true
  }
};
module.exports = nextConfig;
