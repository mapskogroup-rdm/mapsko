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
    // 1. Find and modify all rules that handle SVGs to exclude them
    config.module.rules.forEach((rule) => {
      if (typeof rule !== "object") return;
      if (rule.test && rule.test.test && rule.test.test(".svg")) {
        // Create an exclusion or add to existing one
        rule.exclude = rule.exclude
          ? Array.isArray(rule.exclude)
            ? [...rule.exclude, /\.svg$/i]
            : [rule.exclude, /\.svg$/i]
          : /\.svg$/i;
      }
      
      // Also check nested oneOf rules which Next.js uses heavily
      if (rule.oneOf) {
        rule.oneOf.forEach((nestedRule) => {
          if (nestedRule.test && nestedRule.test.test && nestedRule.test.test(".svg")) {
            nestedRule.exclude = nestedRule.exclude
              ? Array.isArray(nestedRule.exclude)
                ? [...nestedRule.exclude, /\.svg$/i]
                : [nestedRule.exclude, /\.svg$/i]
              : /\.svg$/i;
          }
        });
      }
    });

    // 2. Add our own SVGR loader as the primary handler for all SVGs
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
