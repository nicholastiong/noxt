/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => [
    {
      source: "/expresso",
      destination: "http://localhost:5173",
    },
  ],
};

module.exports = nextConfig;
