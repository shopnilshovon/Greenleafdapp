/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // যদি external image ব্যবহার করো তাহলে domain add করবে
  },
};

export default nextConfig;
