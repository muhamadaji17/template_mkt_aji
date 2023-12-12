/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    API_URL: "http://103.175.219.184:8010",
    endPoint: "http://103.175.219.184:8010/api/trx/todo",
  },
};

module.exports = nextConfig;
