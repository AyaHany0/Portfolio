/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // The stylesheet links for layout.css and page.css were the only
    // render-blocking requests on the page — measured at ~630 ms of the critical
    // path for roughly 11 KB of CSS. Inlining that into the document removes
    // both round trips. The trade-off is that the CSS is no longer cached
    // separately across navigations, which at this size is worth it.
    inlineCss: true,
  },
};

export default nextConfig;
