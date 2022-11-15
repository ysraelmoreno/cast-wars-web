/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "castwars.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
