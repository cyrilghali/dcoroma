/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['eglisecopte.ch', 'strapi.dcoroma.it'],
  },
  swcMinify: true,
}

module.exports = nextConfig
