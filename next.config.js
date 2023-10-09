const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withImages(),
};

module.exports = nextConfig;
