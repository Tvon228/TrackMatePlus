import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"lucide-solid/icons": fileURLToPath(
				new URL(
					"./node_modules/lucide-solid/dist/source/icons",
					import.meta.url
				)
			),
		},
	},
})
