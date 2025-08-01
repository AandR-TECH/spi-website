
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Allow loading external images if needed in the future. At present we
    // serve all images from the `public/assets` directory.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/(.*)\.(png|jpg|jpeg|gif|svg|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;