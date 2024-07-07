/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.digikala.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '*.digikala.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  httpAgentOptions: {
    keepAlive: false,
  },

  
};

export default nextConfig;
