/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.fallback = { tls: false, net: false, fs: false, perf_hooks: false };

        return config;
    }
}

module.exports = nextConfig
