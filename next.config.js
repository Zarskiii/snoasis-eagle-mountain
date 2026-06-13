/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/tiki-catering-clone' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tiki-catering-clone/' : '',
}

module.exports = nextConfig 