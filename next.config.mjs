/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            's3.amazonaws.com',
        ],
    },
};

export default nextConfig;
