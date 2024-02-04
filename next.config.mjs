/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  i18n: {
    locales: ["pl", "en", "de", "ua", "no"],
    defaultLocale: "en",
    localeDetection: false
  },
};

export default nextConfig;
