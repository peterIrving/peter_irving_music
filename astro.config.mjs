import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon"; // https://www.astroicon.dev/guides/upgrade/v1/
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import AutoImport from "astro-auto-import";
import vue from "@astrojs/vue";
import umami from "@yeskunall/astro-umami";
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
	site: "https://www.peterirving.live",
	output: "hybrid",
	adapter: netlify({ edge: false }),
	base: "/",
	integrations: [// example auto import component into blog post mdx files
		AutoImport({
			imports: [
				// https://github.com/delucis/astro-auto-import
				"@components/Admonition/Admonition.astro",
			],
		}), mdx(), icon({
			// I include only the icons I use. This is because if you use SSR, ALL icons will be included (no bueno)
			// https://www.astroicon.dev/reference/configuration#include
			include: {
				tabler: [
					"bulb",
					"alert-triangle",
					"flame",
					"info-circle",
					"arrow-narrow-left",
					"arrow-narrow-right",
					"menu-2",
					"x",
					"chevron-down",
					"category",
					"calendar-event",

				],
				gridicons: ["*"],
			},
		}), sitemap(), vue(), compress({
			HTML: true,
			JavaScript: true,
			CSS: true,
			Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
			SVG: false, // astro-icon handles this
		}), umami({
			websiteId: "e0965b9b-2d3b-4d00-8339-04bf810d5024",
			src: "https://cloud.umami.is/script.js",
			domains: ["peterirving.live", "www.peterirving.live"],
		}),],
	vite: {
		plugins: [tailwindcss()],
		// stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
		build: {
			assetsInlineLimit: 0,
		},
		envPrefix: "BREVO_",
	},
});