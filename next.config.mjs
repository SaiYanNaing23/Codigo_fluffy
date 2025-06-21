/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "nft.fluffyhugs.io",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "blob.v0.dev",
                port: "",
                pathname: "/**",
            },
        ],
        unoptimized: true,
    },
    experimental: {
        optimizeCss: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    poweredByHeader: false,
};


export default nextConfig;
