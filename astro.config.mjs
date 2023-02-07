import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), sanity({
    projectId: 'wdc9k0ey',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true
  }), compress()],
  output: "server",
  adapter: vercel()
});