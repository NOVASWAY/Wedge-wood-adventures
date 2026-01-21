/** @type {import('next').NextConfig} */
const basePath = '/Wedge-wood-adventures';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
}

export default nextConfig