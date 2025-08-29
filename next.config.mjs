// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3001", // Your API port
//         pathname: "/api/images/**", // Path to your images served via the API
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bgunsri.com",
        pathname: "/api/images/**", // Path to your images served via the API
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001", // Your API port
        pathname: "/api/images/**", // Path to your images served via the API
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
