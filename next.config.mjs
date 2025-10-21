/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true }, // προσωρινό
  eslint: { ignoreDuringBuilds: true }     // προαιρετικό
};
export default nextConfig;
