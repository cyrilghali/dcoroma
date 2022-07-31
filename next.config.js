/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['eglisecopte.ch'],
  },
  swcMinify: true,
}

module.exports = nextConfig
