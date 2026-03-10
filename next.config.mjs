import withSVGR from "next-svgr";

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
};

const svgrConfig = withSVGR(nextConfig);

export default svgrConfig;
