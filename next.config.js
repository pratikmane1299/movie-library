/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMD_API_BASE_PATH: process.env.TMD_API_BASE_PATH,
  },
};

module.exports = nextConfig
