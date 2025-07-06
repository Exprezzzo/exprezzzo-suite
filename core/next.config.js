/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "default-src 'self' https://*.firebaseapp.com https://*.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.firebaseapp.com; style-src 'self' 'unsafe-inline';" }
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: { unoptimized: true, domains: ['firebasestorage.googleapis.com'] },
  experimental: { optimizeCss: true },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  }
};

module.exports = nextConfig;
