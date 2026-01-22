/** @type {import('next').NextConfig} */
const basePath = '/Wedge-wood-adventures';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

export default nextConfig