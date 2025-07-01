// apps/lvgt-pwa/next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production'
})

module.exports = withPWA({
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  images: {
    unoptimized: true
  }
})
