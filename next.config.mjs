// Removed withSVGR import to use direct webpack configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/mount-ville",
        destination: "/project/mount-ville",
        permanent: true,
      },
      {
        source: "/casabella",
        destination: "/project/casa-bella",
        permanent: true,
      },
      {
        source: "/royaleville",
        destination: "/project/royale-ville",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    // Configures SVGR for Next.js 14
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            ext: "tsx",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
