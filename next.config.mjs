/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },

    images: {
        remotePatterns: [
            {
                hostname: "ik.imagekit.io",
                protocol: "https"
            }
        ]
    }

}

export default nextConfig;
