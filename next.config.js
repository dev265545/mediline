/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "rb.gy",
      "books.google.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};


module.exports = nextConfig
