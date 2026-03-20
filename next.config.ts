import type { NextConfig } from "next";

/**
 * Allow Next.js dev internals (HMR / Turbopack) when the site is opened from
 * another device on your LAN (e.g. iPhone at http://192.168.x.x:3000).
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
 */
const extraAllowedDevOrigins =
  process.env.ALLOWED_DEV_ORIGINS?.split(",")
    .map((h) => h.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    // Private LAN (Origin host is your Mac’s IP, e.g. 192.168.1.124)
    "192.168.*.*",
    "10.*.*.*",
    ...extraAllowedDevOrigins,
  ],
};

export default nextConfig;
