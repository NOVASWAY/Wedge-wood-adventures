/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  trailingSlash: true,
}

export default nextConfig
