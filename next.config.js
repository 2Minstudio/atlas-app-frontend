/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*','127.0.0.1','localhost','atlaschiroindia.com','api.atlaschiroindia.com']
  }
}

module.exports = nextConfig
