/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['eglisecopte.ch', 'strapi.dcoroma.it'],
  },
  swcMinify: true,
}

module.exports = nextConfig
