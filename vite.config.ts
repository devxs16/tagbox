// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy target: Vercel (Nitro `vercel` preset).
// - On Vercel, the platform sets NITRO_PRESET=vercel automatically, but we pin
//   it here so `bun run build` produces a Vercel-ready `.vercel/output/` bundle
//   from any CI or your local machine.
// - Inside Lovable's own build sandbox the preset is forced to Cloudflare and
//   this override is ignored, so the in-editor preview keeps working.
export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
  },
});
