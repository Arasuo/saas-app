import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },

    // ⬇️ no "eslint" block here at all

    images: {
        remotePatterns: [{ hostname: "img.clerk.com" }],
    },
};

export default withSentryConfig(nextConfig, {
    org: "nathan-h6",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});