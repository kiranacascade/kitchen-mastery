const withImages = require("next-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withImages(),
  style: {
    css: ["styles/globals.css"],
  },
};

module.exports = nextConfig;
