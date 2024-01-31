/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"utfs.io"
            }
        ]
    }
};

//adicionando um domínio as nossas imagens

export default nextConfig;
