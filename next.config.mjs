/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services/:slug', destination: '/technology', permanent: true },
      { source: '/services', destination: '/technology', permanent: true },
      { source: '/work/:path*', destination: '/products', permanent: true },
      { source: '/work', destination: '/products', permanent: true },
      { source: '/lab', destination: '/research', permanent: true },
      { source: '/lab/:path*', destination: '/research', permanent: true },
    ]
  },
}

export default nextConfig
