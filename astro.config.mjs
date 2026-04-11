import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

// Set PUBLIC_SITE_URL on Vercel (Production + Preview) for canonical URLs and sitemaps later.
const site = process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  site,
  output: "static",
  adapter: vercel(),
});
