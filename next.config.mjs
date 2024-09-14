/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['**.com', '**.net'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            port: '',
          },
          // {
          //   protocol: 'https',
          //   hostname: '**.com',
          //   port: ''
          // },
          
        ],
      },
};

export default nextConfig;
