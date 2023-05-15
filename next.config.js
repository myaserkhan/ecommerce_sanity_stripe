/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async headers() {
    return [
      {
        // Set CSP header to allow resources from specific domains
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; style-src 'self' fonts.googleapis.com; script-src 'self' js.stripe.com;"
          }
        ],
      },
    ];
  },
};
