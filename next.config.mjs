/** @type {import("next").NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["vehbi.me", "*.pages.dev"],
        }
    }
};

export default nextConfig;
